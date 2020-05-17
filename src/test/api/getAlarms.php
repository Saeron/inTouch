<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Methods: GET");
//header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';
$sql = "select telefono from alarmas;";
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
?>
