var publicaciones = new DtoPublicacion();

function obtenerCantidadDePublicaciones() {
	dtoCantPubli = new dtoCantPubli();
	let resp_leer_usuario = get_cant_publicaciones(dtoCantPubli);
	return resp_leer_usuario;
}
function obtenerPublicacion(cantidad) {
	dtoPublicacion =  new DtoPublicacion();
	if (cantidad>0) {
	let resp_leer_usuario = get_publicacion(cantidad);
	return resp_leer_usuario;
	} else { return 0; }
}

function formatearFecha(fecha) {
    return (fecha !== '') ? fecha.slice(8,10)+'/'+fecha.slice(5,7)+'/'+fecha.slice(0,4) : false;
}