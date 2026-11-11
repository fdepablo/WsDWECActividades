
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero.";
    }
    return a / b;
}

function calcular(operacion) {
    const primero = document.getElementById("primero").value.trim();
    const segundo = document.getElementById("segundo").value.trim();
    const resultado = document.getElementById("resultado");

    // Los campos de texto devuelven cadenas. Hay que convertirlas a números.
    const a = parseFloat(primero);
    const b = parseFloat(segundo);

    if (primero === "" || segundo === "") {
        resultado.textContent = "Escribe dos números válidos.";
        return;
    }

    switch (operacion) {
        case "sumar":
            resultado.textContent = sumar(a, b);
            break;
        case "restar":
            resultado.textContent = restar(a, b);
            break;
        case "multiplicar":
            resultado.textContent = multiplicar(a, b);
            break;
        case "dividir":
            resultado.textContent = dividir(a, b);
            break;
    }
}
