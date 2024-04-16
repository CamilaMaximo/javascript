//bug - problema causada pelo programador.
//Debug -metodo para resolver o bug
//validação - testes para ter o mínimo possível de bugs.

//strict mode
//deve ser declarado no topo das funções ou arquivos
"use strict";//a partir daqui começa a valer o strict

//console.log como debug
let a = 1
let b = 2 
if(a == 1){
    a = b + 2;
}
console.log(a);
for(let i = 0; i < b; i++){
     a = a + 2;
     console.log(a);
}
if(a > 5) {
    a = 25;
}
console.log(a)

//debug: debugger

let c = 1;
let d = 2;

if(c == 1){
    c = d + 2;
}

debugger;

for(let i = 0; i < d; i++){
    c = c + 2;
}
console.log("executou o loop");

debugger;
if(c > 5){
    c = 25
}

//tratamento de erro ou dados por função

function checkNumber(n){
    const result = Number(n);
    if(Number.isNaN(result)){
        console.log("Valor incorreto");
        return;
    }
    console.log("valor correto!");
    return result;
}
checkNumber(5);
checkNumber("10");//transformou string em number 
checkNumber({});
checkNumber("test");

//Exceptions - erro do pragramador
//throw new ERROR -faz  aparecer em vermelho na parte do erros
let x = 10
if( x != 11){
    //throw new Error("o valor de x não pode ser diferente de 11")
}

//TRY CATCH
try{
    const soma = x + y;
}catch(erro){
    console.log(`Error no programa: ${erro}`);
}

//FINALLY
//vai depois do try e catch

try{
    const value = checkNumber("asd")
    if(value){
        throw new Error("Valores inválidos")
    }
}catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`)
}finally{
        console.log("O código foi executado")
}

//Assertions
//valores passados pelo usuário e geram erro.
function checkArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter elemnetos");
    }else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}
//checkArray([]);//passando array invalido que dará error
checkArray([1,2,3,4])//passar array valido

