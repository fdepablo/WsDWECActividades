

function cambiarTitulo() {
    document.getElementById("titulo").textContent = "Mi próxima aventura";
}

function cambiarPresentacion() {
    document.getElementById("presentacion").textContent = "Este fin de semana empezaré un juego nuevo.";
}

function colorearJuegos() {
    const juegos = document.querySelectorAll(".juego");
    for (const juego of juegos) {
        juego.style.color = "darkgreen";
    }
}

function resaltarParrafos() {
    const parrafos = document.getElementsByTagName("p");
    for (const parrafo of parrafos) {
        parrafo.style.backgroundColor = "#fff4b3";
    }
}

function modificarEnlace() {
    const enlace = document.getElementById("enlace");
    enlace.textContent = "GOG";
    enlace.href = "https://www.gog.com/";
}

function anadirJuego() {
    const juego = document.createElement("li");
    juego.textContent = "Stardew Valley";
    juego.className = "juego";
    document.getElementById("listaJuegos").appendChild(juego);
}

function crearMensaje() {
    // Evitar crear el mensaje si ya existe, por ejemplo si se pulsa varias veces el botón.
    if (document.getElementById("mensaje")) {
        return;
    }

    const mensaje = document.createElement("p");
    mensaje.id = "mensaje";
    mensaje.textContent = "¡Tengo muchas aventuras pendientes!";
    document.getElementById("zonaMensaje").appendChild(mensaje);
}

function eliminarMensaje() {
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.remove();
    }
}

// AMPLIACIÓN. Eliminar el último juego si queda alguno.
function eliminarUltimoJuego() {
    const ultimoJuego = document.getElementById("listaJuegos").lastElementChild;
    
    if (ultimoJuego) {
        ultimoJuego.remove();
    }
}
