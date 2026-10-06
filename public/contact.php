<?php
header('Content-Type: application/json; charset=utf-8');

$allowedOrigins = [
    'https://revagraphics.com',
    'https://www.revagraphics.com',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

     
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    $data = $_POST;
}



if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid form data.']);
    exit;
}

// =========================
// CLEAN AND VALIDATE INPUTS
// =========================
$name = trim((string) ($data['fullName'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['contactNumber'] ?? ''));
$interestedIn = trim((string) ($data['interestedIn'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $interestedIn === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields with a valid email address.']);
    exit;
}

if (preg_match('/[\r\n]/', $email) || preg_match('/[\r\n]/', $name) || preg_match('/[\r\n]/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid form data.']);
    exit;
}

$nameHtml = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$emailHtml = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phoneHtml = htmlspecialchars($phone !== '' ? $phone : 'Not provided', ENT_QUOTES, 'UTF-8');
$interestedInHtml = htmlspecialchars($interestedIn, ENT_QUOTES, 'UTF-8');
$messageHtml = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

// =========================
// RECEIVER EMAILS (Update these)
// =========================


$recipients = [
    'sourabhnegi557@gmail.com',
    'nverma@revagraphics.com',
];

// =========================
// SUBJECT
// =========================
$subject = 'New Inquiry: Reva Graphics';

// =========================
// EMAIL BODY DESIGN
// =========================
$body = "
<html>
<body style='margin:0; padding:20px; background:#f4f4f4; font-family:Arial,sans-serif;'>
    <table width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td align='center'>
                <table width='auto' cellpadding='0' cellspacing='0' 
                style='background:#ffffff; border-radius:10px; overflow:hidden; max-width: 600px;'>
                    
                    <!-- HEADER -->
                    <tr>
                        <td style='background:#0B1D33; padding:20px; text-align:center;'>
                            <h2 style='margin:0; color:#C9A227;'>Reva Graphics</h2>
                        </td>
                    </tr>
                    
                    <!-- CONTENT -->
                    <tr>
                        <td style='padding:30px;'>
                            <h3 style='margin-top:0; color:#0B1D33;'>New  Inquiry</h3>
                            <table width='100%' cellpadding='12' cellspacing='0' style='border-collapse:collapse;'>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9; width:150px;'><strong>Name</strong></td>
                                    <td style='border:1px solid #ddd;'>{$nameHtml}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Phone</strong></td>
                                    <td style='border:1px solid #ddd;'>{$phoneHtml}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Email</strong></td>
                                    <td style='border:1px solid #ddd;'>{$emailHtml}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Interested In</strong></td>
                                    <td style='border:1px solid #ddd;'>{$interestedInHtml}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Message</strong></td>
                                    <td style='border:1px solid #ddd;'>{$messageHtml}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Submitted At</strong></td>
                                    <td style='border:1px solid #ddd;'>" . date('d M Y H:i:s') . "</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- FOOTER -->
                    <tr>
                        <td style='padding:18px; text-align:center; background:#fafafa; color:#777; font-size:13px;'>
                            This email was sent from the Reva Graphics website inquiry form.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
";

// =========================
// HEADERS
// =========================
$headers = [
    "From: Reva Graphics <nverma@revagraphics.com>",
    "Reply-To: {$email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion()
];

// =========================
// SEND MAIL
// =========================
$success = true;
foreach ($recipients as $recipient) {
    if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
        $success = false;
    }
}




// =========================
// RESPONSE
// =========================
if ($success) {
    echo json_encode(['success' => true, 'message' => 'Thank you! We will contact you soon.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to send inquiry.']);
}
?>



