let nome = "Camila"
console.log(nome)

nome = "Camila Aleixo"

console.log(nome)

// let - uma variável mutavel
//cont - não é mutavel

//Criar varias variaveis

let a = 4, b = 5 , c = 10
console.log(a,b,c)

//nomes reservados 
//não podem utilizar,pois já tem uma definição no javaScript


//Estrutura de uma função
//função prompt
//const age = prompt("Seu nome ?");
//console.log(`você tem ${age} idade.`);

// Objeto MATH
/*
math - metódo de matemática

max: encontra o maior número
floor: arredonda pa baixo

*/

console.log(Math.max(5,2,1,10))

console.log(Math.floor(5.14))

console.log(Math.ceil(5.14))

//console

console.log('teste');
console.log('erro!');
console.log('Aviso!');

// iF
const m = 10
if(m > 5){
    console.log("M é maior que 5!")
}

//Else
const loggedIn = false
if(loggedIn){
    console.log("Esta autenticado!")
}else{
   console.log("não está autenticado")
}

//Else if



if(1 > 2){
    console.log("Teste!")
}else if(2 > 3){
   console.log("não está autenticado")
}else if(5 > 1){
    console.log("Agora sim!")
}

const userName = "Matheus"
const userAge = 31

if(userName === "jose"){
    console.log("bem vindo josé")
}else if ( userName === 'Matheus' && userAge === 31){
    console.log("Nenhuma condição aceita!")
}

// for - while
let o = 10;

do{
    console.log( `Valor de o: ${o}`);
    o--;
} while ( o > 1);

for(let t = 0 ;t < 10 ; t++ ){
    console.log("repita")

}

//pode ter a variavel fora do for, também.

let r = 10
for(r; r > 0; r = r - 1){
    console.log(  `R diminuindo ${r}` )
}

//forçando a saida de um loop
//break

for(let g = 20; g > 10; g--){
    console.log( `o valor de g é ${g}` );
    if( g === 12){
        console.log("O g é 12!");
        break
    }
}

//Pulando a execução de um loop

for(let s= 0; s < 10; s = s + 1){
    //operador resto % para saber par ou impar
    if(s % 2 === 0){
        console.log("Número par!");
        continue
    }
    console.log(s, "ímpar")
}
//switch
/*se estiver usando mais de 4 if e else
o melhor é usar switch. cada if seria um case */
const job = "Advogado"
switch(job){
    case "Programado":
        console.log("Você é um programador")
    break;
    case "Advogado":
        console.log("Advogado")
        break;
    case "Engenheiro":
        console.log("Engenheiro")
    break;
    default:
        console.log("Profissão não encontrada.")

}
