<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "bdclientes";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);




//Inserta un nuevo registro y recepciona en método post los datos 
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $email=$data->email;
    $dni=$data->dni;
    $fechaNac=$data->fechaNac;
    $edad=$data->edad;

    $sqlDni = mysqli_query($conexionBD,"SELECT dni FROM clientes WHERE dni=$dni");
    $rowCantidad=$sqlDni->num_rows;

        if(($email!="")&&($nombre!="") && ($rowCantidad <= 0)){
            
            $sqlClientes = mysqli_query($conexionBD,"INSERT INTO clientes(nombre,apellido,email,dni,fechanacimiento,edad) VALUES('$nombre','$apellido','$email','$dni','$fechaNac','$edad') ");
            echo json_encode(["success"=>1]);
        }
        else{
            echo json_encode(["success"=>2]); //valor repetido en dni
        }
    exit();
}

// Consulta todos los registros de la tabla cliente
$sqlClientes = mysqli_query($conexionBD,"SELECT * FROM clientes ");
if(mysqli_num_rows($sqlClientes) > 0){
    $Clientes = mysqli_fetch_all($sqlClientes,MYSQLI_ASSOC);
    echo json_encode($Clientes);
}
else{ echo json_encode([["success"=>0]]); }


?>
