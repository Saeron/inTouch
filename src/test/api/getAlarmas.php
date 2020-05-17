<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $miarray = file_get_contents("php://input", true);
    $datos = json_decode($miarray);


    $sql = "select * from alarmas where telefono='$datos->telefono';";
    $conn = connect_db();
    $rs = mysqli_query($conn, $sql);

    $array = array();
    if ($rs) {
        $array = array();
        while ($fila = mysqli_fetch_assoc($rs)) {
            $array[] = array_map('utf8_encode', $fila);
        }
        $res = json_encode($array, JSON_NUMERIC_CHECK);
    } else {
        $res = null;
        echo mysqli_error($conn);
    }
    echo $res;

    mysqli_close($conn);
}
