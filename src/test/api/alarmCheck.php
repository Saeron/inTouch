<?php
use PHPMailer\PHPMailer\PHPMailer;

//Load Composer's autoloader
require 'vendor/autoload.php';
require 'connectDB.php';

$sql = "select * from alarmas;";
$conn = connect_db();
$rs = mysqli_query($conn, $sql);
while ($fila = mysqli_fetch_array($rs)) {

    $time = strtotime($fila['fechafin']);

    $curtime = time();

    if (($curtime - $time) > 1800) { //1800 seconds

        //echo $fila['telefono'] . ' ';

        //buscar usuario

        $tel = $fila['telefono'];
        $sql = "select * from clientes where telefono='$tel';";
        $rsu = mysqli_query($conn, $sql);
        $filau = mysqli_fetch_array($rsu);
        $email = $filau['email'];

        //echo $email . ' ';
        //eviar email alarma

        $mail = new PHPMailer;
        $mail->setFrom($email);
        $mail->addAddress('antdcs@gmail.com');
        $mail->Subject = 'Alarma';
        $mail->Body = $filau['msg'];
        if (!$mail->send()) {
            echo 'Message was not sent.';
            echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
            echo 'Mensaje enviado';
        }

    }
}
mysqli_close($conn);
