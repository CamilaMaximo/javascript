//Arrays
const lista = [1,2,3,4,5]
console.log( lista)


//Prpriedades
//pode acessar por ponto ou colchetes ( . ) ,( [] ) = dado.prop    ou dado['prop']

const numbers = [ 3, 4, 6];

console.log(numbers.length)
console.log(numbers['length'])

//acessar os elementos do array

const arr = ['a', 'b', 'c', 'd', 'd']

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

//métodos - são como funções

const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers)

//String- método

const text = "algum texto"

console.log( text.toLocaleUpperCase());
console.log(typeof text.toLocaleUpperCase);
console.log(text.indexOf("g"));

//Objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};
console.log(person);
console.log(person.name);

//Criando e deletando propriedades
const car ={
    engine:2.0,
    brand:"vw",
    model: "Tiguan",
    km: 20000,
};
console.log(car);
car.doors = 4;
console.log(car);
// para deletar
delete car.km;
console.log(car)


//mais sobre objeto
const obj = {
    a: "test",
    b: true, 
};
console.log(obj instanceof Object)

// pegar a as propriedades do primeiro objeto

const obj2 = {
    c: []
}
// 1-o objeto que quer colocar a copia e o 2 é o objeto que quer copiar
Object.assign(obj2, obj)
console.log(obj2)

//verificar as propriedades do objeto
//saber tanto a chave como o valor 

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

//MUTAÇÂO- as mudanças do primeiro reverbera no segundo

const a = {
    name:"Matheus"
};
const b = a
console.log(a);
console.log(b);

console.log( a=== b);
//agora se adicionar algo ao "a" o "b também" terá.
a.age =31;

console.log(a);
console.log(b);

delete b.age

console.log(a);
console.log(b);

//LOOPS EM ARRAYS

const users =["Mateus", "Camila", "Adriano", "Paulo"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
};

//mais métodos de array - Push(adiciona no fim) e pop(remove no fim)

const array = ["a","b","c"];
array.push("d");

console.log(array);
console.log(array.length);
array.pop();
console.log(array);


//Para retornar o item removido
const intemRemovido = array.pop();
console.log(intemRemovido)
//array já con item removido   vvv
console.log(array)

//acrescentar novos itens ao  final
array.push("z","x","y");
console.log(array);

//Métodos shift e unshift
const latters = ["a", "b", "c"];
const latter = latters.shift()// remover o primeiro 
console.log(latter);// aqui tera apenas a letra removida
console.log(latters);//aqui tera todas as letras que ficaram

latters.unshift("p", "q", "r");// adicionar itens no inicio
latters.unshift("z");// adicionar apenas um item no inicio
console.log(latters)


//indesxOf e lastindexOf
//indexOf = permite encontrar o índice de um elemento
// lastindexOf = utilizado queando há repetições para encontrar o índice da última ocorrência.

const myElements = ["morango", "maçã", "abacate", "Pêra","Abacate"]
console.log(myElements.indexOf("maçã"));//aqui pega apenas o [indice]
console.log(myElements.indexOf("abacate")); //aqui pega apenas o índice

console.log(myElements[2]); //aqui pega o nome 
console.log(myElements[myElements.indexOf("abacate")]);//aqi pega também o nome 

console.log(myElements.lastIndexOf("Abacate"));//ultimo índice

//Array:slice
//serve para extrair um arrai menor de um array maior, sem modificar o array maior.
const testSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testSlice.slice(2, 6);// pegará apartir do primeiro parâmetro e ira ate onde o segundo parâmetro pedir.
console.log(testSlice);
console.log(subArray);
const subArray2 = testSlice.slice(2)//desta forma irá pegar todo o array apartir do indice 2 neste caso.
console.log(subArray2)


//forEach
//é como uma estrutura de repetição ou while
const nums = [ 1, 2, 3, 4, 5]
nums.forEach((numero) =>{
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category:"PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];
posts.forEach((posts) => {
    console.log(`Exibindo post: ${posts.title}, da categoria: ${posts.category}`);
});

//array: Includes

const brands = ["bmw", "Vw", "fiat"];

console.log(brands.includes("fiat"));
console.log(brands.includes("kia"));

if(brands.includes("bmw")){
    console.log("há carros desta marca.")
}

//reverse
//inverte os elementos do array  e modifica o array original
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();
console.log(reverseTest);

//métodos  de strings

//trim - remove tudo o qque não é texto em uma strinng e preenche  espaços em brancos 

const trimTest ="  testando  \n  ";

console.log(trimTest);
console.log(trimTest.trim());
console.log(trimTest.length);//mostra que conta com espaço branco
console.log(trimTest.trim().length);

//string : padStart
//insere um texto no começo da string

const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");//coloca primeiro a quantidade de itens que quer e o segundo por onde começar.
console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd);//padEnd colocará itens apos ex: 001 0000


//método string:split
//divide uma string em um array por ponto, virgula e espaço.

const frase = "o rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(' ');
console.log(arrayDaFrase);// a frase será separada por separadores em cada palavra.

//string: join
//une uma lista em uma string e podemos colocar o separador
const  fraseDeNovo =arrayDaFrase.join(' ');
console.log(fraseDeNovo)//a frase voltara normal sem separadores

const itensParaComprar = ["mouse", "teclado", "monitor"]

const fraseDeCompra = `Precisomos comprar: ${itensParaComprar.join(', ')}.`;// a virgula aomeio matera os itens separados coma virgula ao virar string Ex: mause, teclado, ....

console.log(fraseDeCompra)

//repeat
//repete o text n vezes
const palavras = 'testando ';
console.log(palavras.repeat(5));


//array
//Rest Operator - Rest Parameters 
//caracterizado pelo símbolo  tres pontos ...


const somaInfinita =(...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
};
console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 459, 121212, 34, 54, 30, 7));



//Estrutura de repetição for...of
//é baseado no array utilizado

const somaInfinita2 = (...args) => {
    let total = 0;
    for( numero of args) {
        total += numero;
    }
    return total;
};

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(5, 6, 1, 23 ,5, 6, 3, 5));

//Destructuring em objetos
//desestruturar algum dado

const userDetails ={
    firstName: "Mateus",
    lasName: "battisti",
    job: "programador",
};
const{ firstName, lasName, job} = userDetails //cria vari[aveis automaticamente
console.log(firstName, lasName, job);

//renomear variaveis
const {firstName: primeiroNome} = userDetails
console.log(firstName);
console.log(primeiroNome);

//destructuring em array

const myList =["avião", "submarino", "carro"]
const[veiculaA, veiculoB, veiculoC] = myList

console.log(veiculaA, veiculoB, veiculoC)

//JSON

const myJson = '{"name":"camila", "age":33, "skills": ["PHP","JavaScript","python"]}';
console.log(myJson);
console.log(typeof myJson);

//conversão de JSON
//parse - json para objeto
//se esquecer as aspas exterior e interior dará erro
const myObject = JSON.parse(myJson);

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject)

//stringfy - json para string

const myNewJson = JSON.stringify(myObject)

console.log(myObject)