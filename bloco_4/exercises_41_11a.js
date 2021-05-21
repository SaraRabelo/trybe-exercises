let salarioBruto = 3000.00;
let salarioBase = 0;
let descontoINSS = 0;
let descontoIR = 0;

if (salarioBruto <= 1556.94) {
    descontoINSS = salarioBruto * 0.08;
}
else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)){
    descontoINSS = salarioBruto * 0.09;
}
else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)){
    descontoINSS = salarioBruto * 0.11;
}
else {
    descontoINSS = salarioBruto * 570.88;
}    

salarioBase = salarioBruto - descontoINSS;

if ((salarioBase >= 1903.99) && (salarioBase<= 2826.65)){
     descontoIR = (salarioBase *0.075) - 142.80;
}
else if ((salarioBase >= 2826.66) && (salarioBase <= 3751.05)){
     descontoIR = (salarioBase * 0.15) - 354.80;
}
else if ((salarioBase >= 3751.06) && (salarioBase <= 4664.68)){
     descontoIR = (salarioBase * 0.225) - 636.13;
}
else if (salarioBase > 4664.68){
     descontoIR = (salarioBase * 0.275) - 869.36;
}    
salarioLiquido = salarioBase - descontoIR;
console.log("Salário Bruto: "+salarioBruto);
console.log("Salario Base:"+salarioBase);
console.log("Desconto INSS: "+descontoINSS);
console.log("Desconto IR:" + descontoIR);
console.log("Salário Líquido:"+salarioLiquido);




