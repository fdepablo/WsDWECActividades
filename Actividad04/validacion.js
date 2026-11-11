
/**
 * Valida un campo de formulario contra una expresión regular.
 * @param {string} id - El ID del campo de formulario.
 * @param {RegExp} expresion - La expresión regular para validar el campo.
 * @param {string} idError - El ID del elemento donde se mostrarán los errores.
 * @param {string} mensaje - El mensaje de error a mostrar si el campo no es válido.
 * @returns {boolean} - true si el campo es válido, false en caso contrario.
 */
function validarCampo(id, expresion, idError, mensaje) {
    const valor = document.getElementById(id).value.trim();
    const error = document.getElementById(idError);
    const esValido = expresion.test(valor);

    if (esValido) {
        error.textContent = "";
    } else {
        error.textContent = mensaje;
    }
    return esValido;
}

function comprobarInscripcion() {

    // Comprobamos todos los campos para mostrar sus errores a la vez.
    const nombreValido = validarCampo("nombre", /^[A-Za-z]{2,20}$/, "errorNombre",
        "Escribe entre 2 y 20 letras, sin espacios, tildes ni ñ.");
    const usuarioValido = validarCampo("usuario", /^[A-Za-z0-9_]{3,12}$/, "errorUsuario",
        "Escribe entre 3 y 12 caracteres. Usa letras sin tildes ni ñ, números o guion bajo.");
    const codigoValido = validarCampo("codigoPostal", /^[0-9]{5}$/, "errorCodigoPostal",
        "Escribe exactamente 5 dígitos.");
    const telefonoValido = validarCampo("telefono", /^[6-9][0-9]{8}$/, "errorTelefono",
        "Escribe 9 dígitos, empezando por 6, 7, 8 o 9, sin espacios ni prefijos.");

    const mensaje = document.getElementById("mensaje");
    if (nombreValido && usuarioValido && codigoValido && telefonoValido) {
        mensaje.textContent = "Datos correctos. Inscripción preparada";
    } else {
        mensaje.textContent = "Revisa los campos marcados.";
    }
}
