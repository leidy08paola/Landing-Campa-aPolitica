// Esperar a que el HTML cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-registro');

    // Escuchar el evento de envío (submit) del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Capturar los valores ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const celular = document.getElementById('celular').value;

        // Aquí simularías el envío a una base de datos
        console.log('Datos capturados con éxito:', { nombre, correo, celular });

        // Mostrar una alerta genial en pantalla
        alert(`¡Gracias por sumarte, ${nombre}! Hemos registrado tu contacto (${correo}). Pronto recibirás nuestras propuestas de Estudio y Aprendizaje.`);

        // Limpiar el formulario automáticamente
        formulario.reset();
    });
});