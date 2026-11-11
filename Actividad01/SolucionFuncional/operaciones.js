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
    const a = document.getElementById("primero").valueAsNumber;
    const b = document.getElementById("segundo").valueAsNumber;
    const resultado = document.getElementById("resultado");

    if (Number.isNaN(a) || Number.isNaN(b)) {
        resultado.textContent = "Escribe dos números válidos.";
        return;
    }

    resultado.textContent = operacion(a, b);
}
