const txtOp1= document.getElementById("op1");
const txtOp2= document.getElementById("op2");
const parametro= document.getElementById("parametro");
const btnCalcular= document.getElementById("calcular")
const pResultado= document.getElementById("resultado");


btnCalcular.addEventListener('click', calcular)
function ejercicioUno() {
    const parametro = document.getElementById("parametro").value;
    const txtOp1 = parseFloat(document.getElementById("txtOp1").value);
    const txtOp2 = parseFloat(document.getElementById("txtOp2").value);

    if (parametro === "+" || parametro === "-" || parametro === "/" || parametro === "*") {
        let resultado;
        switch (parametro) {
            case "+":
                resultado = txtOp1 + txtOp2;
                break;
            case "-":
                resultado = txtOp1 - txtOp2;
                break;
            case "/":
                resultado = txtOp1 / txtOp2;
                break;
            case "*":
                resultado = txtOp1 * txtOp2;
                break;
        }
        document.getElementById("pResultado").innerText = "=" + resultado;
    } else {
        document.getElementById("pResultado").innerText = "cálculo imposible";
    }
}






