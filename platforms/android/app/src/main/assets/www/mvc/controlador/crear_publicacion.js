const inputImg = document.getElementById('subir-imagen');
const img = document.getElementById('img-ruta');

const inputNombre = document.getElementById('input-nombre');
const inputMail = document.getElementById('input-mail');
const inputFecha = document.getElementById('input-fecha');
const inputTelefono = document.getElementById('input-telefono');
const inputTipo = document.getElementById('input-publi');
const inputAnimal = document.getElementById('input-animal');
const inputImagen = document.getElementById('subir-imagen');
const inputInformacion = document.getElementById('informacion');

function subirImagen() {
    inputImg.click();
    console.log(img.src);
    console.log(inputImg.value);
    //var reader = new FileReader();
    setTimeout( function() {
        /* reader.readAsDataURL(inputImg);
        reader.onloadend = function () {
        img.src = reader.result; */
        console.log(inputImg.value);
    //}
    }, 5000);
}

function volverPrincipal() {
    window.location.href='principal.html';
}

function confirmarPublicacion() {
    fechaFormateada = formatearFecha(inputFecha.value);
    const dtoPublicacion = new DtoPublicacion();
    dtoPublicacion.setNombre = inputNombre.value;
    dtoPublicacion.setMail = inputMail.value;
    dtoPublicacion.setFecha = fechaFormateada;
    dtoPublicacion.setTelefono = inputTelefono.value;
    switch (inputTipo.value) {
        case 'Perdido':
            dtoPublicacion.setTipo = 1;
            break;
        case 'Encontrado':
            dtoPublicacion.setTipo = 2;
            break;
        case 'En Adopcion':
            dtoPublicacion.setTipo = 3;
            break;
    }
    if (inputAnimal.value === 'Perro') { dtoPublicacion.setAnimal = 1; }
    else { dtoPublicacion.setAnimal = 2; }
    dtoPublicacion.setImagen = inputImagen.value;
    dtoPublicacion.setInfo = inputInformacion.value;
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