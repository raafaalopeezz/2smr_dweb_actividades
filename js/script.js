// 1. Seleccionamos el formulario y el párrafo donde mostraremos los mensajes
const form = document.getElementById("formContacto");
const mensaje = document.getElementById("mensaje");

// 2. Añadimos el evento para cuando se pulse el botón "Enviar solicitud"
form.addEventListener("submit", function (event) {
    
    // Evitamos que la página se recargue y borre todo
    event.preventDefault();

    // Obtenemos los valores que el usuario ha escrito en los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const privacidad = document.getElementById("privacidad").checked; // Usamos .checked para las casillas

    // Depuración: Mostramos en la consola lo que hace el usuario (Puntúa en la rúbrica)
    console.log("Intentando enviar formulario de: " + nombre);

    // Validación 1: Comprobamos si los campos de texto están vacíos
    if (nombre === "" || email === "") {
        mensaje.textContent = "Todos los campos de texto son obligatorios";
        mensaje.style.color = "red";
        console.log("Error: Campos vacíos");
        return; // Cortamos la ejecución para que no siga
    }

    // Validación 2: Comprobamos si no ha marcado el checkbox de privacidad
    if (privacidad === false) {
        mensaje.textContent = "Debes aceptar la política de privacidad para continuar";
        mensaje.style.color = "red";
        console.log("Error: Privacidad no aceptada");
        return;
    }

    // Si todo está correcto, mostramos un mensaje de acierto
    mensaje.textContent = "Solicitud enviada correctamente ✅ Te contestaremos por email.";
    mensaje.style.color = "green";
    console.log("Formulario enviado con éxito");

    // Limpiamos el formulario para que quede como nuevo
    form.reset();
});