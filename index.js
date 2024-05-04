
function ejercicioUno(a=0,b=0,operacion="suma"){
switch(operacion){
    case "suma":
        return console.log(a+b);
        
    case "resta":
        return console.log(a-b);
        
    case "division":
        return console.log(a/b);
        
    case "multiplicacion":
        return console.log(a*b);
        
    default:
        console.error ("La operacion $(operacion)no es valida")  
}
} 
ejercicioUno(2,2,"suma")


