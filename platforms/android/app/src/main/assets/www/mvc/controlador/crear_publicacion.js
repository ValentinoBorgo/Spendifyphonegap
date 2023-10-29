
const inputTipo = document.getElementById('input-publi');
const inputInformacion = document.getElementById('informacion');

function volverPrincipal() {
    window.location.href='principal.html';
}

function confirmarPublicacion() {
    const dtoPublicacion = new DtoPublicacion();


 
    const resp = agregar_publicacion(dtoPublicacion);
    if (resp === 'ok') {
        alert("Publicacion creada con éxito !");
        setTimeout( function() {
            window.location.href='principal.html';
        }, 2000);
    } else {
        alert("Ocurrió un error, por favor revise los datos e intente nuevamente..");
    }
}