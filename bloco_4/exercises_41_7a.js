let nota = 70;
let rotulo = Null;

if (nota >= 90 && nota <=100 ){
    rotulo = "A";

}
else if (nota >= 80 && nota < 90) {
    rotulo = "B";

}
else if (nota >= 70 && nota < 80){
    rotulo = "C"
}

else if (nota >= 60 && nota < 70){
    rotulo = "D"
}

else if (nota >= 50 && nota < 60){
    rotulo = "E"
}

else if (nota >= 0 && nota < 50){
    rotulo = "F"
}
else (nota < 0 || nota > 100) {
    
    rotulo = "Erro Porcentagem menor que 0 ou maior que 100"

}
console.log(rotulo)