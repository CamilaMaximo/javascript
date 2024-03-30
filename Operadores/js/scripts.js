

console.log(typeof 2);
console.log(typeof true);
console.log(typeof null);

//aritmética
console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 * 2);
console.log(2 % 2);

//Especial Namber
//Infinity
//-Infinity
//NaN(Not a number)
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(3 * "ted");
console.log(typeof NaN);

//tipo string

console.log(typeof "oi")
console.log("Testando a \n quebra de linha")
console.log("Espaçamento \t de tab")

//concatenanação

console.log("Meu nome é " + "nome")

//Interpolação- template string

console.log(  `A soma de 2 + 2 é: ${2+2} `  )

//Booleans

console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

//comparações

console.log( 5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9)

//valor idêntico

console.log(9 == "9")
console.log(9 === "9")
console.log(9 !== "9")

//Operadores lógicos
//  && AND , || OR , ! not(inverte o valor da operação)

//Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);


console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1); //basta apenas um lado true para o resultado ser true no operador "OU"

console.log(5 > 2  || 5 > 100);

//Empty Values
// palavras reservadas  - undefined e null


console.log(typeof null, typeof undefined);
console.log(null == false)
console.log(undefined == false)

//Conversão do tipo automático

/*

5*null = 0
"5"-3 = 2
"5"+ 1 = 51 
"a"* "b"= NaN

*/







