const txtOp1= document.getElementById("op1");
const txtOp2= document.getElementById("op2");
const parametro= document.getElementById("parametro");
const btnCalcular= document.getElementById("calcular")
const pResultado= document.getElementById("resultado");


btnCalcular.addEventListener('click', calcular)

function ejercicioUno(){
    const parametro= parametro.value
    const txtOp1= parseFloat(txtOp1.value)
    const txtOp2= parseFloat(txtOp2.value)

    if((parametro =="+" || parametro =="-" || parametro=="/" || parametro=="*"))
        let resultado:
        switch(_parametro){
            case "+":
                Resultado=op1 + op2
                
            case "-":
                Resultado=op1 - op2
                
            case "/":
                Resultado=op1 / op2
                
            case "*":
                Resultado=op1 * op2
                 
         }
        pResultado.innerText= "=" + "resultado"
    } else{
        pResultado.innerText="calculo imposible"
    }
        





