<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

$sql = "Select * from alarmas where id='$datos->id';";
$conn = connect_db();
$rs = mysqli_query($conn, $sql);
if ($rs->num_rows > 0) {
    //cambiar a modificar
    $repetir = 0;
    if ($datos->repeDay == "Si") {
        $repetir = 1;
    } else {
        $repetir = 0;
    }
    $sql = "update alarmas set fechaini='$datos->fechaini', fechafin='$datos->fechafin', repeDay ='$repetir'  where id='$datos->id';";
    $rs = mysqli_query($conn, $sql);

    if ($rs) {
        echo '{
                "success": true,
                "message": "Alarm modify succesfully"
            }';
    }else{
        echo '{
            "success": false,
            "message": "Database fail"
        }';
    }
    

} else {
    echo '{
            "success": false,
            "message": "Alarm not in database"
        }';
}

mysqli_close($conn);
