// Variable global para almacenar las transacciones
const transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];

function mostrarTransacciones() {
    const transaccionesContainer = document.getElementById('transacciones-container');
    transaccionesContainer.innerHTML = '';

    for (const transaccion of transacciones) {
        const div = document.createElement('div');
        div.className = 'transaccion';

        div.innerHTML = `
            <div class="tipo">${transaccion.tipo}</div>
            <div class="descripcion">${transaccion.descripcion}</div>
            <div class="cantidad">${transaccion.cantidad}</div>
        `;

        transaccionesContainer.appendChild(div);
    }
}


// Función para confirmar una publicación (puedes ajustar su lógica según tus necesidades)
function confirmarPublicacion() {
    const monto = document.getElementById('monto').value;
    const descripcion = document.getElementById('descripcion').value;

    if (monto && descripcion) {
        const gasto = {
            tipo: 'Gasto',
            descripcion,
            cantidad: parseFloat(monto),
        };
        transacciones.push(gasto);
        mostrarTransacciones();
        limpiarCampos(); // Limpia los campos después de confirmar la publicación
    }
}

// Función para volver a la página principal
function volverPrincipal() {
    // Implementa la lógica necesaria para volver a la página principal
    // Esto podría ser redireccionar o mostrar/ocultar elementos según tu diseño.
}

// Función para limpiar los campos de entrada después de confirmar la publicación
function limpiarCampos() {
    document.getElementById('monto').value = '';
    document.getElementById('descripcion').value = '';
}

// Lógica para mostrar las transacciones al cargar la página principal
window.onload = function () {
    mostrarTransacciones();
};



