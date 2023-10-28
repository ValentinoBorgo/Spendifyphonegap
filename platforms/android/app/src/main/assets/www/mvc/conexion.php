<?php

//Permite el acceso desde cualquier origen
header('Access-Control-Allow-Origin: *');

//Conexion a la base de datos MySql
$conexion = mysqli_connect("localhost","id19610446_admin","g{?+p7{y(T6q])6e","id19610446_perdidosyencontrados") or die(mysqli_error());
// Check connection
if (mysqli_connect_errno) {
    echo "Failed to connect to MySQL: NO SE PUDOOOOOOOOOO" . mysqli_connect_error();
    exit();
} else {
    echo "CONEXION REALIZADA CON EXITO !!";
}

//echo "pase la conexion::::  ";

//Definicion de variables recibidas del post

//En produccion.......
        $Dni= $_POST['Dni'];

//En prueba......
//$Dni = 12345678;

//Consulta sql para leer un usuario por dni
        $sql="SELECT * FROM publicaciones";

//Ejecuta la consulta
        $resultado = $conexion->query($sql);
//echo ("pase la ejecucion");

//Arma la cabecera "json"
        header('Content-Type: application/json');

//Verifica si encontro filas en la tabla
        if ($resultado->num_rows > 0) {
//El resultado (resulset) se recorre con el while	
//A cada fila (en este caso es una sola) la carga en un array 
            while ($fila=mysqli_fetch_array($resultado)){
                $publicaciones = array ('estado' => 'ok', 'id' => $fila['id'], 'nombre' => $fila['nombre'], 'mail' => $fila['mail'], 'fecha' => $fila['fecha'], 'telefono' => $fila['telefono'], 'id_tipo' => $fila['id_tipo'], 'id_animal' => $fila['id_animal'], 'imagen' => $fila['imagen'], 'informacion' => $fila['informacion']);
            }
            } else {
//Si no existe crea el array con todos valores vacios	
                $publicaciones = array ('estado'=>'', 'id'=>'', 'nombre'=>'', 'mail'=>'', 'fecha'=>'', 'telefono'=>'', 'id_tipo'=>'', 'id_animal'=>'', 'imagen'=>'', 'informacion'=>'');
            }	

//Codifica y retorna en formato json el array
        echo json_encode($publicaciones, JSON_FORCE_OBJECT); 

//cierra la conexion
$conexion->close();

?>