<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST,GET");
header("Access-Control-Allow-Headers: Content-Type");

require 'connectDB.php';

$sql = "Select * from alarmas;";
$conn = connect_db();
$rs = mysqli_query($conn, $sql);

if ($rs) {
    $array = array();
    while ($fila = mysqli_fetch_array($rs)) {
        $timestamp = strtotime($fila['fechafin']);
        if ((time() - $timestamp) > 1800) {
            if ($fila['repeDay'] == true) {
                //modificar fila para incrementar repeDay en 1 y cambiar las fechas
               
                //no hace correctamente la diferencia de dias
                //echo $fila['id'] . "  De " . $fila['fechaini'] . " a " . $fila['fechafin'] . " van ";
                $fecha1 = new DateTime($fila['fechaini']);
                $fecha2 = new DateTime($fila['fechafin']);
                $diff = $fecha1->diff($fecha2);

                // El resultados sera 3 dias
                $minutes = $diff->days * 24 * 60;
                $minutes += $diff->h * 60;
                $minutes += $diff->i;
                //echo $minutes . ' minutos';
                $fecha2->add(new DateInterval('PT' . $minutes . 'M'));
                //echo "la fecha final queda en " . $fecha2->format('Y-m-d H:i:s');
                //echo "<br>";

                $f1= $fecha1->format('Y-m-d H:i:s');
                $f2 = $fecha2->format('Y-m-d H:i:s');
                $id = $fila['id'];

                if($fila['numrep']==null){
                    $sql = "update alarmas set fechaini='$f1', fechafin='$f2', numrep ='1'  where id='$id'";
                }else{
                    $nrepe = $fila['numrep'];
                    $nrepe = $nrepe + 1;
                    $sql = "update alarmas set fechaini='$f1', fechafin='$f2', numrep ='$nrepe'  where id='$id'";
                }
                $rsm = mysqli_query($conn, $sql); 
                var_dump($rsm);
            } else {
                //elimina la fila completamente
                $id = $fila['id'];
                $sql = "delete from alarmas where id='$id';";
                $rsd = mysqli_query($conn, $sql);
                if ($rsd) {
                    echo $fila['id'] . ' con fecha: ' . $fila['fechaini'] . ' eliminado.  ';
                } else {
                    echo 'Fallo al eliminar fila.';
                }

            }
        }
    }
    //$res = json_encode($array, JSON_NUMERIC_CHECK);
} else {
    echo mysqli_error($conn);
}
mysqli_close($conn);
