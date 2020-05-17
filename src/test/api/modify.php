<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

//if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $miarray = file_get_contents("php://input", true);
    $datos = json_decode($miarray);

    $sql = "Select * from clientes where telefono='$datos->id';";
    $conn = connect_db();
    $rs = mysqli_query($conn, $sql);
    if ($rs->num_rows > 0) {
        //cambiar a modificar
        $sql = "update clientes set nombre='$datos->username', email='$datos->email', telefono ='$datos->telefono'  where telefono='$datos->id';";
        $rs = mysqli_query($conn, $sql);

        if($rs){
            echo '{
                "success": true,
                "message": "User modify succesfully"
            }';
        }else{
            //var_dump($sql);
            echo '{
                "success": false,
                "message": "Database fail"
            }';
        }
        

    } else {
        echo '{
            "success": false,
            "message": "user not in database"
        }';
    }

    mysqli_close($conn);
//}
