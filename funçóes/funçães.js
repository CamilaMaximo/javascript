
// criando função

function minhaFuncao(){
console.log("testando");
}
minhaFuncao();


//função anônima,pois o nome já vem na variavek criada anteriormente.
const minhaFuncaoEmVariavel = function (){
    console.log("Função em variável")
}
minhaFuncaoEmVariavel();

//função com parâmetro

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}
funcaoComParametro(" alguma coisa");

//retorno das funções - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2;
}
const resultado = soma(a, b)
console.log(resultado)

//ou pode fazer desta maneira
console.log(soma(c,d))

//Escopo das funções
//é o que esta dentro das funções

let y = 15

function TestandoEscopo(){
    let y = 20
    console.log(`Y dentro da função ${y}`)
};
TestandoEscopo()
console.log(y)

// Escopo aninhado(Nested Scopes)

let m = 10

function EscopoAninhado(){
    let m = 20

    if(true) {
        let m = 30

        if(true){
            let m = 40
            console.log(m);
     
        }
        console.log(m);
    }
    console.log(m);
}
EscopoAninhado();
console.log(m);

//Arrow function
//função anônima tem que estar dentro de uma variavel

const TesteArrow = () => {
    console.log("Esta é uma arrow funtion");
};
TesteArrow()

const parOuImpar = (n) => {
    if( n % 2 === 0) {
        console.log("Par");
        return
    }
    console.log("Impar");
}

parOuImpar(5);
parOuImpar(10)
// mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4));

//arrow usando apenas um linha,simplificando

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));
console.log(raizQuadrada(12));
//arrow sem retorno
const helloWorld = () => console.log("hello world");

helloWorld();

// parâmetro opcional
 const multiplication = function (m, n) {
    if(n === undefined){
        return m * 2
    }else{
      return  m * n
    }
 };
 console.log(multiplication(5));
 console.log(multiplication(2, 4));

 const greeting = (login) => {
    if(!login){
        console.log("ola")
        return;
    }
    console.log(  `Olá ${login}`)
 }

 greeting();
 greeting("Camila");

 //Argumnetos com valor default 
 //default : arugumentos com valor prévio.

 const mensagemGrenting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
 };

 console.log(mensagemGrenting("Camila"))
 console.log(mensagemGrenting("joão, bom dia !"))
 
 //repetindo
 const repeatText = (text , repeat = 2) =>{
     for(let i = 0; i < repeat; i++){
        console.log(text);
        
     }
 }

 repeatText("testando");
 repeatText("Agora repete 5 x", 5)

 //Closure
 //conj de funções que reaproveita as variáveis

 function someFunction(){
    let txt = "Alguma coisa";

    function display( ) {
        console.log(txt);
    }
    display();
 }
 someFunction();


 //Salvando resultado com closure

 const multiplicationClosure = (n) => {
    return(m) => {
        return n * m;
    };
 };

 const c1 = multiplicationClosure(5);
 const c2 = multiplicationClosure(10);

 console.log(c1);// salvou a conta de n * m
 console.log(c2);//Salvou a conta de n * m

 console.log(c1(5));//passado o parametro fez a multiplicação
 console.log(c2(10));//passado o parâmetro vez a multiplicação



 //REcursão
 //função se auto invoca, um tipo de loop

 const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar!")
    }else{
        const x = n - m;
        console.log(x);
        untilTen(x , m);
    }
 };
 untilTen(100, 7);


 
 function factorial(x) {
    if (x === 0) {
        return 1
    }else {
        return x * factorial(x - 1)
    }
 }

 const num = 6;

 const result = factorial(num);
 console.log(`O factorial do n[umero ${num} é ${result}`)