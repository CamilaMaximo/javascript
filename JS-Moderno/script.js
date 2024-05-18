// let e const


//neste caso não avisa que já existe e o valor interno e externo são modificados
var x = 10;
var y = 15;
 
if(y > 10){
    var x = 5;
    console.log(x);
}

console.log(x)


//Neste caso o valor interno é um e o externo outro
let a = 10;
let b = 15;
if( b > 10){
    let a = 5;
    console.log(a);
}
console.log(a);


function logNome(){
    const nome = "Camila";
    console.log(nome);
};

const nome = "Matheus";

logNome()
console.log(nome);


//Arrow
const sum = function(a, b){
    return a - b
}

const arrowSum = (a, b) => a - b;

console.log(sum(5,15));
console.log(arrowSum(5,15));