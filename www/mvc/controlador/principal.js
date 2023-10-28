const todos = document.getElementById('todos');
const encontrados = document.getElementById('encontrados');
const perdidos = document.getElementById('perdidos');
const adopcion = document.getElementById('adopcion');
const input = document.getElementById('input');
const contenedor = document.getElementById('contenedor');
let id_publicacion_seleccionada = '';
const icon_detalle = '<form id="form-detalle" action="ver-detalle.html" method="POST"><input id="input-detalle"><svg onclick="detallePublicacion(event)" class="icon-detalle" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style"z-index: 5;" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg></form>';
const icon_modificar = '<form id="form-modificar" action="modificar-publicacion.html" method="POST"><input id="input-modificar"><svg onclick="modificarPublicacion(event)" class="icon-detalle" fill="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></form>';
const icon_eliminar = '<form id="form-eliminar" action="eliminar-publicacion.html" method="POST"><input id="input-eliminar"><svg onclick="eliminarPublicacion(event)" class="icon-eliminar" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></form>';

let publicacionesFront = [];
let backBD = [];
let auxiliar = [];

let resp = obtenerCantidadDePublicaciones();
let cant_publicaciones = resp.cantidad;
for (let cont = 1; cont<=resp.cantidad;cont++) {
    publicacionesFront.push(obtenerPublicacion(cont));
};
backBD = publicacionesFront;

let div_insert = document.createElement('div');
contenedor.appendChild(div_insert);
let info = publicacionesFront.map(e => {
    return '<div class="publicacion"><div class="publi-top">'+e.id+icon_detalle+icon_modificar
            +icon_eliminar+'</div><div style="display: flex; margin-top: 10px;"><div class="imagen-publi"><img src="'+e.imagen+'"></div><div style="margin-left: 10px; margin-top: 5px;">'
            +'<p>'+e.fecha+'</p>'
            +'<p>'+e.tipo+'</p>'
            +'<p>'+e.animal+'</p>'
            +'</div></div></div>';
}).join('');
div_insert.innerHTML = info;

const form_detalle = document.getElementById('form-detalle');
let input_detalle = document.getElementById('input-detalle');
const form_modificar = document.getElementById('form-modificar');
let input_modificar = document.getElementById('input-modificar');
const form_eliminar = document.getElementById('form-eliminar');
let input_eliminar = document.getElementById('input-eliminar');

function seleccionarFiltro(event) {
    event.preventDefault();
    const nombreBtn = event.target.innerText;
    switch (nombreBtn) {
        case 'Encontrados':
            encontrados.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            perdidos.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            filtrarPublicaciones(1);
            insertarPublicacionesEnPlantilla();
            break;
        case 'Perdidos':
            perdidos.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            filtrarPublicaciones(2);
            insertarPublicacionesEnPlantilla();
            break;
        case 'En Adopción':
            adopcion.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            perdidos.classList.remove('seleccionado');
            filtrarPublicaciones(3);
            insertarPublicacionesEnPlantilla();
            break;
        case 'Todos':
            todos.classList.add('seleccionado');
            perdidos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            filtrarPublicaciones(4);
            insertarPublicacionesEnPlantilla();
            break;
    }
}

function filtrarPublicaciones(tipo_publicacion) {
    auxiliar = [];
    publicacionesFront = backBD;
    switch (tipo_publicacion) {
        case 1:
            publicacionesFront.forEach(e => {
                if (e.tipo === 'Encontrado') {
                    auxiliar.push(e);
                }
            });
            publicacionesFront = auxiliar;
            break;
        case 2:
            publicacionesFront.forEach(e => {
                if (e.tipo === 'Perdido') {
                    auxiliar.push(e);
                }
            });
            publicacionesFront = auxiliar;
            break;
        case 3:
            publicacionesFront.forEach(e => {
                if (e.tipo === 'En Adopcion') {
                    auxiliar.push(e);
                }
            });
            publicacionesFront = auxiliar;
            break;
        case 4:
        break;
    }
}

function insertarPublicacionesEnPlantilla() {
    contenedor.removeChild(contenedor.childNodes[0]);
    let div_insert = document.createElement('div');
    contenedor.appendChild(div_insert);
    let data = publicacionesFront.map(e => {
        return '<div class=publicacion><div class="publi-top">'+e.id+icon_detalle+icon_modificar
                +icon_eliminar+'</div><div style="display: flex; margin-top: 10px;"><div class="imagen-publi"><img src="'+e.imagen+'"></div><div style="margin-left: 10px; margin-top: 5px;">'
                +'<p>'+e.fecha+'</p>'
                +'<p>'+e.tipo+'</p>'
                +'<p>'+e.animal+'</p>'
                +'</div></div></div>';
    }).join('');
    div_insert.innerHTML = data;
}

function busqueda() {
    console.log(input.value); 
    alert(input.value);
}

function crearPublicacion() {
    window.location.href='crear-publicacion.html';
}

function modificarPublicacion(event) {
    id_publicacion_seleccionada = event.path[3].firstChild.textContent;
    console.log(id_publicacion_seleccionada);
}

function eliminarPublicacion(event) {
    id_publicacion_seleccionada = event.path[3].firstChild.textContent;
    console.log(id_publicacion_seleccionada);
    const modal = document.querySelector('.modal');
    modal.classList.add('mostrar-modal');
}

function detallePublicacion(event) {
    window.location.href='ver-detalle.html';
}

$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

function cancelar() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('mostrar-modal');
}

function validarMailEliminar(event) {
    const input = document.getElementById('input-modal-eliminar');
    console.log(input.value);
    let idEliminar = 0;
    backBD.forEach(element => {
        if (element.id === id_publicacion_seleccionada && element.mail === input.value) {
            idEliminar = element.id;
        }
    });
    if (idEliminar !== 0) {
        const resp = eliminar_publicacion(idEliminar);
        if (resp === 'ok') {
            alert("Publicacion eliminada con éxito !");
            setTimeout( function() {
                window.location.href='principal.html';
            }, 2000);
        } else {
            alert("Ocurrió un error, por favor revise los datos e intente nuevamente..");
        }
    } else {
        alert("El email ingresado es incorrecto");
    }
}