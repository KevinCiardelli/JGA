<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
phpinfo();
try {
    // SMTP settings
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPSecure = 'ssl'; // Use 'ssl' if you have SSL enabled
    $mail->Port = 465; // Use 465 for 'ssl'

    // Gmail account credentials
    $mail->Username = 'kevinciardelli02@gmail.com';
    $mail->Password = 'pwycqkhthtandfyj'; // Use your app password if enabled, else use your Gmail account password

    // Email content
    $mail->setFrom($email, $name);
    $mail->addAddress('ciardelk@bc.edu', 'kevin');
    $mail->Subject = 'Inquiry';
    $mail->Body = $message;

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo 'Error: ' . $mail->ErrorInfo;
}
