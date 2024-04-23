//função setTimeot
console.log("Ainda não executou");

setTimeout(function(){
    console.log("Requisição assíncrona");
}, 2000);

console.log("Ainda não executou")

//função setInteval
//não para de ser executada e como um loop infinito e não é tão rápido como um loop normal

console.log("Ainda não executou");

//setInterval(function(){

//    console.log("Requisição assíncrona");
//}, 3000);


console.log("Ainda não executou")

//Promises

const promessa = Promise.resolve( 5 + 5);
console.log("Algum código");

promessa.then((value) => {
    console.log(`A soma é ${value}`);
    return value;//paar reutilizar tem que colocar return
})
.then((value)=> value - 1)
.then((value)=> console.log(`Agora é ${value}`));
console.log("Outro código");

//tratamentos de erros nas promises
//catch pode ter varios thens sobre erros diferentes que poderiam acontecer.
Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos")
    }
})
.catch((err) => console.log(`um erro ocorreu ${err}`));

//Rejeitando a promises

function checkNumber(n){
    return new Promise((resolve, reject) =>{
        if( n > 10){
            resolve(`O numero é maior que 10`);
        }else{
            reject(new Error("Numero muito baixo"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);
//console.log( a , b)// assim não ira ver o reasultado correto

//para puxar o resulto correto deste tipo de promises
a.then((value) => console.log(`O resultado é:${value}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));

b.then((value) => console.log(`O resultado é:${value}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));

//Resolvendo várias promises
//método all
const p1 = new Promise((resolve, reject)=>{
    setTimeout(function() {
        resolve(10);
    },3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject)=>{
    if(30 > 10){
        resolve(30);
    }else{
        reject("Erro!");
    }
});
//desta forma a resposta chegara junta de todas as variaveis
Promise.all([p1,p2,p3]).then((values)=> console.log(values));

//Async
//função que já retorna um promises
async function somarComDelay(a, b) {
    return a + b;
}
somarComDelay(2,4).then((value)=>{
    console.log(`O valor da soma é: ${value}`);
});
console.log("test async");

//await
//não precisa trabalhar diretamento com promises
function resolveComDelay(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Resolveu a promise");
        }, 2000);
    });//baseada em promises
}

async function chamadaAsync(){
    console.log("chamando a promise, e esperando o resultado");
    const resul = await resolveComDelay();
    console.log(`O resultado chegou ${resul}`);
}
chamadaAsync();

//Generators
//funcionam de forma semelhante as promises; function* , yield

function* gererator(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = gererator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
