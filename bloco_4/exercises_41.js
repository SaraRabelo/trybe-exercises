let a = 10;
let b = 20;
let mensagem = null

// Resposta 1a Questão

let adicao = (a+b);
let subtra = (a-b);
let multip = (a*b);
let divis = (a/b);
let modulo = (a%b);

// Resposta 2a questão

if (a>b) {
    mensagem = " a é Maior que b. O Maior é " + a;

}
else if (a<b) {
    mensagem = " b é Maior que a. O Maior é " +b;

}
else {
    mensagem = " a e b são íguais!  "+a
}


console.log (mensagem);

// Resposta 3a questão

let c = 50;
let wmaior = 0;
if ((a>b) &&  (a>c)) {
    wmaior = a;
}
else if ((b>a) && (b>c)) {
    wmaior = b;
}
else if ((c>a) && (c>b)){
    wmaior = c;
}
else {
    wmaior = 0;
}
 if (wmaior === 0) {
     console.log("Os numeros são iguais")
 }
 else {
     console.log("O Maior número é " + wmaior)
 }


