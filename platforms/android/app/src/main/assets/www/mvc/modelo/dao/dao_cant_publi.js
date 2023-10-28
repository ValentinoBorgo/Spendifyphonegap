
// "DAO" destinada a contener todos los accesos a la tabla "Usuarios"
// del modelo. 
// No contiene el acceso real (query a la tabla) porque la base
// se encuentra en un servidor remoto, por lo tanto lo que hace
// es invocar mediante "ajax" a scripts php para cada accion a 
// realizar.

// Funcion destinada a obtener los datos de un usuario x por su dni.
//
// Recibe como parametro un "DTO" dentro del cual se encuentra el
// dni que se quiere leer
//
// Retorna una "se�al" con el resultado del acceso al servidor y el 
// mismo DTO recibido como parametro con la informacion (si habia)
//
function get_cant_publicaciones(dtoCantPubli) {
//Define la variable para responder si encontro o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
//  "ok" (encontro al usuario)
	var resp_leer_usuario = "";
	const prueba = '';
//Obtiene el dni del objeto recibido como parametro	
	cantidad = dtoCantPubli.getCantidad;
//Pregunta si es numerico o vacio
	if ( cantidad === null) { 
		console.log("Entre por el if");
    }else{
//Arma el "post" para enviarlo por ajax
		var parametros = {
			"cant_publ" : prueba
		};
//Invoca a la url donde se encuentra el archivo "usuario_leer_por_dni.php"
		$.ajax({
			data: parametros,
			type: 'post',
			dataType: 'json',
			async: false,
			url: 'https://perdidos-encontrados.000webhostapp.com/conexion.php',
			success: function(respuesta) {
				resp_leer_usuario = respuesta['estado'];
			//Completa la informacion del DTO con la respuesta del servidor
			//	dtoPublicacion.setId = respuesta['Id'];
			//	dtoPublicacion.setNombre = respuesta['Nombre'];	
			//	dtoPublicacion.setDni = respuesta['Dni'];
			//	dtoPublicacion.setContrasena = respuesta['Contrasena'];	

				/* dtoPublicacion.setId = respuesta['id'];
				dtoPublicacion.setNombre = respuesta['nombre'];
				dtoPublicacion.setMail = respuesta['mail'];
				dtoPublicacion.setFecha = respuesta['fecha'];
				dtoPublicacion.setTelefono = respuesta['telefono'];
				dtoPublicacion.setTipo = respuesta['id_tipo'];
				dtoPublicacion.setAnimal = respuesta['id_animal'];
				dtoPublicacion.setImagen = respuesta['imagen'];
				dtoPublicacion.setInfo = respuesta['informacion']; */

				// {"estado":"ok","cant_filas":"3"}

				dtoCantPubli.setCantidad = respuesta['cant_filas'];

			},
			error: function(jqXHR, textStatus, errorMessage) {
				respuestaNoRecibida(jqXHR, textStatus);
				alert("falla dao cant");
				resp_leer_usuario = "er";				
			}
		});
	}
	return resp_leer_usuario, dtoCantPubli;
}

//Funcion que se ejecuta si NO pudo conectarse con el servidor (error de conexion).
//
//Recibe como parametros las respuestas ajax ante el intento de conexion	
//
function respuestaNoRecibida(jqXHR, textStatus){
//Informa el error, esto es solo de prueba, ya que se recuerda que el modelo
//no debe tener contacto con la vista	
	alert("Error de conexion, intente mas tarde");
	alert (textStatus + jqXHR.status);
}	


// Funcion destinada a modificar el nombre y/o contrase�a de un usuario x por su id.
//
// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
//
// Retorna una "se�al" con el resultado del acceso al servidor
//
function modif_por_id(dtoUsuario) {
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no modifico el usuario),
//  "ok" (modifico los datos del usuario)
	var resp_mod_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id" : dtoUsuario.getId,
		"Nombre" : dtoUsuario.getNombre,
		"Contrasena" : dtoUsuario.getContrasena,
	};

//Invoca a la url donde se encuentra el archivo "usuario_modif_por_id.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_modif_por_id.php',
		success: function(respuesta) {
			resp_mod_usuario = respuesta['estado'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_mod_usuario = "er";
		}
	});
	
	return resp_mod_usuario;
}


// Funcion destinada a agregar un usuario.
//
// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
//
// Retorna una "se�al" con el resultado del acceso al servidor
//
function agregar_usuario(dtoUsuario) {
//Define la variable para responder si encontró o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no agrego el usuario),
//  "ok" (agrego el usuario)
	var resp_agre_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Dni" : dtoUsuario.getDni,
		"Nombre" : dtoUsuario.getNombre,
		"Contrasena" : dtoUsuario.getContrasena,
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_agregar.php',
		success: function(respuesta) {
			resp_agre_usuario = respuesta['estado'];
			dtoUsuario.setId = respuesta['idUsuarioNuevo'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre_usuario = "er";
		}
	});
	
	return resp_agre_usuario;
}
