const txtOp1 = document.getElementById("op1");
const txtOp2 = document.getElementById("op2");
const parametro = document.getElementById("parametro");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener('click', ejercicioUno);

function ejercicioUno() {
    const operador1 = parseFloat(txtOp1.value);
    const operador2 = parseFloat(txtOp2.value);
    const operacion = parametro.value;

    let resultado;
    switch (operacion) {
        case "+":
            resultado = operador1 + operador2;
            break;
        case "-":
            resultado = operador1 - operador2;
            break;
        case "/":
            resultado = operador1 / operador2;
            break;
        case "*":
            resultado = operador1 * operador2;
            break;
        default:
            resultado = "cálculo imposible";
    }

    pResultado.innerText = "=" + resultado;
}







