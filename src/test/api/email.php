<?php
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

//Load Composer's autoloader
require 'vendor/autoload.php';
$mail = new PHPMailer;
$mail->setFrom('antdcs@gmail.com');
$mail->addAddress('antdcs@gmail.com');
$mail->Subject = 'First PHPMailer Message';
$mail->Body = 'Hi! This is my first e-mail sent through PHPMailer.';
if (!$mail->send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
