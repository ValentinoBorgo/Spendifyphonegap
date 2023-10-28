const todos = document.getElementById('todos');
const encontrados = document.getElementById('encontrados');
const perdidos = document.getElementById('perdidos');
const adopcion = document.getElementById('adopcion');
const input = document.getElementById('input');
const contenedor = document.getElementById('contenedor');

let publicaciones = [
    {
        id: 'hg23',
        nombre: 'Usuario 1',
        mail: 'us1@gmail.com',
        fecha: '22/10/2022',
        telefono: '3424685858',
        tipo: 'Perdido',
        animal: 'Perro',
        imagen: 'foto',
        descripcion: 'Se llama Pocho, se perdio el 22/10 por barrio Roma'
    },
    {
        id: 'fa45',
        nombre: 'Usuario 2',
        mail: 'us2@gmail.com',
        fecha: '15/10/2022',
        telefono: '3425256395',
        tipo: 'Encontrado',
        animal: 'Perro',
        imagen: 'foto',
        descripcion: 'Encontrado por la plaza constituyentes'
    },
    {
        id: 'kk47',
        nombre: 'Usuario 3',
        mail: 'us3@gmail.com',
        fecha: '20/10/2022',
        telefono: '3425748965',
        tipo: 'Perdido',
        animal: 'Gato',
        imagen: 'foto',
        descripcion: 'Se perdió por barrio candioti, tiene collar rojo'
    }
];

let div_prueba = document.createElement('div');
contenedor.appendChild(div_prueba);
let info = publicaciones.map(e => {
    return '<div class=publicacion><div class="publi-top">'
            +'<svg onclick="modificarPublicacion(event)" fill="blue" style="width: 8%; padding-right: 10px; margin-bottom: 2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>'
            +'<svg onclick="eliminarPublicacion(event)" fill="red" style="width: 6%; padding-right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
            +'</div><div style="display: flex; margin-top: 10px;"><div style="width: 50%;">'
                +'<p>'+e.nombre+'</p>'
                +'<p>'+e.fecha+'</p>'
                +'<p>'+e.telefono+'</p>'
                +'<p>'+e.tipo+'</p>'
                +'<p>'+e.animal+'</p>'
                +'</div><div class="imagen-publi">'+e.imagen+'</div></div>'
            +'<p>'+e.descripcion+'</p></div>';
            
}).join('');
div_prueba.innerHTML = info;

function seleccionarFiltro(event) {
    event.preventDefault();
    const nombreBtn = event.target.innerText;
    switch (nombreBtn) {
        case 'Encontrados':
            encontrados.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            perdidos.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            break;
        case 'Perdidos':
            perdidos.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            break;
        case 'En Adopción':
            adopcion.classList.add('seleccionado');
            todos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            perdidos.classList.remove('seleccionado');
            break;
        case 'Todos':
            todos.classList.add('seleccionado');
            perdidos.classList.remove('seleccionado');
            encontrados.classList.remove('seleccionado');
            adopcion.classList.remove('seleccionado');
            break;
    }
}

function busqueda() {
    console.log(input.value); 
    alert(input.value);
}

function crearPublicacion() {
    alert("redirect to crear");
}

function modificarPublicacion(event) {
    console.log(event);
    alert(event);
}

function eliminarPublicacion(event) {
    console.log(event);
    alert(event);
}