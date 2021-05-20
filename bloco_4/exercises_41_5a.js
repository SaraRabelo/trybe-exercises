// 5a Questão do exercício

let angulo1 = 10;
let angulo2 = -60;
let angulo3 = 30;
let wsoma = 0;

wsoma = (angulo1 + angulo2 + angulo3);

if (wsoma === 180) {
    console.log(" É um Triangulo ");

}
else if (wsoma < 0){
    
    console.log(" Angulo Inválido!");
}
else {
    console.log(" Não é um Triangulo! ");
}