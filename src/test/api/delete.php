<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $miarray = file_get_contents("php://input", true);
    $datos = json_decode($miarray);

    $sql = "delete from clientes where telefono=('$datos->telefono');";

    $conn = connect_db();
    $rs = mysqli_query($conn, $sql);

    mysqli_close($conn);
}
