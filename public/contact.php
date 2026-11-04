<?php
header('Content-Type: application/json; charset=utf-8');

// ─────────────────────────────────────────────
// CORS allowlist for direct browser submissions.
// ─────────────────────────────────────────────
$allowed_origins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    'https://revagraphics.com',
    'https://next-reva.vercel.app',
    'https://www.revagraphics.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && (in_array($origin, $allowed_origins, true) || preg_match('/^https?:\/\/(localhost|127\.0\.0\.1|::1)(:\d+)?$/', $origin))) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

// Pre-flight
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (strlen($input) > 40000) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'The inquiry is too large.']);
    exit;
}

if (!is_array($data)) {
    if (!empty($_POST)) {
        $data = $_POST;
    } elseif (trim($input) !== '') {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON request.']);
        exit;
    } else {
        $data = [];
    }
}

$readString = function ($key) use ($data) {
    if (!isset($data[$key]) || (!is_string($data[$key]) && !is_numeric($data[$key]))) {
        return '';
    }

    return trim((string) $data[$key]);
};
$countCharacters = function ($value) {
    $matches = [];
    $count = preg_match_all('/./us', $value, $matches);
    return $count === false ? strlen($value) : $count;
};

$fullname = $readString('fullName');
if ($fullname === '') {
    $fullname = $readString('fullname');
}
$email = $readString('email');
$contactNumber = $readString('contactNumber');
$serviceValue = $readString('interestedIn');
$message = $readString('message');
$agreed = filter_var($data['agree'] ?? false, FILTER_VALIDATE_BOOLEAN);

$serviceLabels = [
    'branding' => 'Brand Identity',
    'web-designing' => 'Website Designing',
    'web-desiging' => 'Website Designing',
    'web-development' => 'Website Development',
    'marketing' => 'Digital Marketing',
    'application' => 'Application Development',
    'customize-software' => 'Customise Software',
    'customize software' => 'Customise Software',
    'other' => 'Other',
];
$interestedIn = $serviceLabels[$serviceValue] ?? '';
$errors = [];

if ($fullname === '') {
    $errors[] = 'Full name is required.';
} elseif ($countCharacters($fullname) > 120) {
    $errors[] = 'Full name must be 120 characters or fewer.';
}
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}
if ($countCharacters($contactNumber) > 40) {
    $errors[] = 'Contact number must be 40 characters or fewer.';
}
if ($interestedIn === '') {
    $errors[] = 'Please select a service.';
}
if ($message === '') {
    $errors[] = 'Message is required.';
} elseif ($countCharacters($message) > 10000) {
    $errors[] = 'Message must be 10000 characters or fewer.';
}
if (!$agreed) {
    $errors[] = 'Please confirm that we may contact you.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
    exit;
}

$recipients = [
    'nverma@revagraphics.com',
    'sourabhnegi557@gmail.com'
];

$configuredRecipients = getenv('CONTACT_TO_EMAILS');
if ($configuredRecipients !== false && trim($configuredRecipients) !== '') {
    $recipients = array_map('trim', explode(',', $configuredRecipients));
}

$recipients = array_values(array_filter($recipients, function ($recipient) {
    return $recipient !== '' && filter_var($recipient, FILTER_VALIDATE_EMAIL);
}));

if (empty($recipients)) {
    error_log('Contact form is missing a valid recipient configuration.');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'The contact service is not configured correctly. Please contact us by phone or email.']);
    exit;
}

$escapeHtml = function ($value) {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};
$fullnameHtml = $escapeHtml($fullname);
$emailHtml = $escapeHtml($email);
$contactNumberHtml = $escapeHtml($contactNumber !== '' ? $contactNumber : 'Not provided');
$interestedInHtml = $escapeHtml($interestedIn);
$messageHtml = $escapeHtml($message);
$subject = 'New Website Inquiry - Reva Graphics';

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
</head>
<body style='margin:0; padding:20px; background:#f4f4f4; font-family:Arial, Helvetica, sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0'>
    <tr>
      <td align='center'>
        <table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);'>

          <!-- Header -->
          <tr>
            <td style='background:#0B1E33; padding:28px 30px; text-align:center;'>
              <h1 style='margin:0; color:#D98E2C; font-size:22px; letter-spacing:0.5px;'>
                Reva Graphics
              </h1>
              <p style='margin:8px 0 0; color:#94a3b8; font-size:13px;'>
                New Website Inquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style='padding:32px 30px;'>
              <h2 style='margin:0 0 20px; color:#0B1E33; font-size:18px;'>
                Inquiry Details
              </h2>

              <table width='100%' cellpadding='12' cellspacing='0' style='border-collapse:collapse; font-size:14px;'>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; width:140px; font-weight:600; color:#334155;'>Full name</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$fullnameHtml}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Email</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>
                    <a href='mailto:{$emailHtml}' style='color:#D98E2C; text-decoration:none;'>{$emailHtml}</a>
                  </td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Phone</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$contactNumberHtml}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Service</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$interestedInHtml}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Message</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a; white-space:pre-wrap;'>{$messageHtml}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Contact consent</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>Accepted</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Submitted</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>" . (new DateTimeImmutable('now', new DateTimeZone('Asia/Kolkata')))->format('d M Y, h:i A') . " IST</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style='padding:18px 30px; background:#f8fafc; text-align:center; color:#64748b; font-size:12px; border-top:1px solid #e2e8f0;'>
              This email was sent from the Reva Graphics website contact form.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
";

// ─────────────────────────────────────────────
// HEADERS
// ─────────────────────────────────────────────
// IMPORTANT: The "From" address should be an email that exists on your hosting
// (e.g. noreply@yourdomain.com). Using a Gmail address here often gets blocked.
$configuredFromEmail = getenv('CONTACT_FROM_EMAIL');
$fromEmail = $configuredFromEmail !== false && trim($configuredFromEmail) !== ''
    ? trim($configuredFromEmail)
    : 'noreply@revagraphics.com';
$fromName  = 'Reva Graphics';

if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
    error_log('Contact form has an invalid sender email configuration.');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'The contact service is not configured correctly. Please contact us by phone or email.']);
    exit;
}

$headers = [
    "From: {$fromName} <{$fromEmail}>",
    "Reply-To: {$email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
];

// ─────────────────────────────────────────────
// SEND
// ─────────────────────────────────────────────
$sentCount = 0;

foreach ($recipients as $to) {
    $sent = @mail($to, $subject, $body, implode("\r\n", $headers));
    if ($sent) {
        $sentCount++;
    } else {
        error_log('Contact form email could not be queued for a configured recipient.');
    }
}

if ($sentCount > 0) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been received. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send inquiry at the moment. Please try again or call us directly.',
        // 'debug' => $failed   // uncomment only while testing
    ]);
}