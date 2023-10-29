function agregarGasto() {
    const monto = document.getElementById('monto').value;
    const descripcion = document.getElementById('descripcion').value;

    if (monto && descripcion) {
        const gasto = {
            tipo: 'Gasto',
            descripcion,
            cantidad: parseFloat(monto),
        };

        // Guardar el gasto en un array o almacenamiento local
        guardarGasto(gasto);

        // Redirigir de vuelta a la página principal
        window.location.href = 'principal.html';
    }
}

function guardarGasto(gasto) {
    // Aquí puedes implementar la lógica para guardar el gasto, por ejemplo, en un array.
    // Ejemplo: transacciones.push(gasto);
}
