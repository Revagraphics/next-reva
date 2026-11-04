export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 40000;
const REQUEST_TIMEOUT_MS = 10000;

function jsonError(message, status) {
  return Response.json({ success: false, message }, { status });
}

export async function POST(request) {
  const configuredEndpoint = process.env.CONTACT_PHP_ENDPOINT;

  if (!configuredEndpoint) {
    return jsonError(
      "The contact form is not configured yet. Please contact us by phone or email.",
      503,
    );
  }

  let endpoint;
  try {
    endpoint = new URL(configuredEndpoint);
  } catch {
    return jsonError("The contact service configuration is invalid.", 500);
  }

  const isLocalHttp =
    endpoint.protocol === "http:" &&
    ["localhost", "127.0.0.1", "[::1]"].includes(endpoint.hostname);
  if (
    (endpoint.protocol !== "https:" && !isLocalHttp) ||
    endpoint.username ||
    endpoint.password
  ) {
    return jsonError("The contact service configuration is invalid.", 500);
  }

  let rawBody;
  try {
    rawBody = await request.text();
  } catch {
    return jsonError("Unable to read the inquiry. Please try again.", 400);
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_REQUEST_BYTES) {
    return jsonError("The inquiry is too large.", 413);
  }

  let formData;
  try {
    formData = JSON.parse(rawBody);
  } catch {
    return jsonError("Please submit a valid inquiry.", 400);
  }

  if (!formData || typeof formData !== "object" || Array.isArray(formData)) {
    return jsonError("Please submit a valid inquiry.", 400);
  }

  const getString = (value) => (typeof value === "string" ? value : "");
  const payload = {
    fullName: getString(formData.fullName),
    email: getString(formData.email),
    contactNumber: getString(formData.contactNumber),
    interestedIn: getString(formData.interestedIn),
    message: getString(formData.message),
    agree: formData.agree === true,
  };

  const payloadBytes = Buffer.byteLength(JSON.stringify(payload), "utf8");
  if (payloadBytes > MAX_REQUEST_BYTES) {
    return jsonError("The inquiry is too large.", 413);
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    let result;
    try {
      result = await upstream.json();
    } catch {
      return jsonError("The contact service returned an invalid response.", 502);
    }

    if (!result || typeof result !== "object" || Array.isArray(result)) {
      return jsonError("The contact service returned an invalid response.", 502);
    }

    const status =
      upstream.status >= 400 && upstream.status <= 599
        ? upstream.status
        : upstream.ok
          ? 200
          : 502;

    return Response.json(
      {
        success: result.success === true,
        message:
          typeof result.message === "string"
            ? result.message
            : "Unable to send inquiry. Please try again.",
      },
      { status },
    );
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    console.error(
      "Contact form PHP endpoint request failed:",
      error instanceof Error ? error.name : "Unknown error",
    );
    return jsonError(
      timedOut
        ? "The contact service took too long to respond. Please try again."
        : "We could not reach the contact service. Please try again or contact us by phone or email.",
      timedOut ? 504 : 502,
    );
  }
}
