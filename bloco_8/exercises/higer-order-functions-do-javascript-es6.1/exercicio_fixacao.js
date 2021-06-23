const acordar= () => {
    return 'Acordando!!';
} 

const tomarCafe= () => {
    return 'Tomar Café!!';
}
    
const dormir= () =>{
    return 'Partiu dormir!!';
}

const doingThings = (func) => func();

console.log(doingThings(acordar));
console.log(doingThings(tomarCafe));
console.log(doingThings(dormir));

