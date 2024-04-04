
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