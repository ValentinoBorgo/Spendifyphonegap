
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
// Retorna una "señal" con el resultado del acceso al servidor y el 
// mismo DTO recibido como parametro con la informacion (si habia)
//
function leer_por_dni(dtoUsuario) {
//Define la variable para responder si encontro o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
//  "ok" (encontro al usuario)
	var resp_leer_usuario = "";
//Obtiene el dni del objeto recibido como parametro	
	dni = dtoUsuario.getDni;
//Pregunta si es numerico o vacio
	if (isNaN(dni) || dni == "") { 

    }else{ 
//Arma el "post" para enviarlo por ajax
		var parametros = {
			"Dni" : dni,
		};
//Invoca a la url donde se encuentra el archivo "usuario_leer_por_dni.php"
		$.ajax({
			data: parametros,
			type: 'post',
			dataType: 'json',
			async: false,
			url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_leer_por_dni.php',
			success: function(respuesta) {
				resp_leer_usuario = respuesta['estado'];
//Completa la informacion del DTO con la respuesta del servidor
				dtoUsuario.setId = respuesta['Id'];
				dtoUsuario.setNombre = respuesta['Nombre'];	
				dtoUsuario.setDni = respuesta['Dni'];
				dtoUsuario.setContrasena = respuesta['Contrasena'];	

			},
			error: function(jqXHR, textStatus, errorMessage) {
				respuestaNoRecibida(jqXHR, textStatus);
				resp_leer_usuario = "er";				
			}
		});
	}
	return resp_leer_usuario;
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


// Funcion destinada a modificar el nombre y/o contraseña de un usuario x por su id.
//
// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
//
// Retorna una "señal" con el resultado del acceso al servidor
//
function modif_por_id(dtoUsuario) {
//Define la variable para responder si encontrÃ³ o no el usuario
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
// Retorna una "señal" con el resultado del acceso al servidor
//
function agregar_usuario(dtoUsuario) {
//Define la variable para responder si encontrÃ³ o no el usuario
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
