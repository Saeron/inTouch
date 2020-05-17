<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

//mucho por terminar
$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

if ($datos->repetir == "Si") {
    $sql = "insert into alarmas (fechafin,repeDay,numrep,telefono,msg) values ('$datos->fechafin',true,'0','$datos->telefono','$datos->msg');";
} else {
    $sql = "insert into alarmas (fechafin,telefono,msg) values ('$datos->fechafin','$datos->telefono','$datos->msg');";
}

$conn = connect_db();
$rs = mysqli_query($conn, $sql);

if ($rs) {
    echo '{
            "success": true,
            "message": "Alarma incluida"
        }';
} else {
    var_dump($sql);
    echo '{
            "success": false,
            "message": "Alarma no incluida"
        }';
}

mysqli_close($conn);
