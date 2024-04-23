const btn = document.querySelector("#my-button");
btn.addEventListener("click", function(){
    console.log("clicou em mim!");
});

//removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("test");
}
secondBtn.addEventListener("click", imprimirMensagem); //colocar função sem  ( ) pois  irá chamar  sem vc clicar automaticamente.

//remover tem que colocar qual que ira remover neste caso imprimirMensagem
const  thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () =>{
     console.log("Evanto removido");
     secondBtn.removeEventListener("click",imprimirMensagem);
});

//argumento do evento

const myTitle = document.querySelector("#my-title");
myTitle.addEventListener("click", (event) => {
    console.log(event);//vai dar um objeto com varias propriedades
    console.log(event.offsetX);//posição do elemento no eixo x
    console.log(event.pointerType);
    console.log(event.target); 
});

//propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

//ira disparar os dois eventos 
containerBtn.addEventListener("click",() => { 
    console.log("Event 1");
});
//para parar com os disparos dos dois event ao mesmo tempo colocar um parâmetro e no inicio colocar o stopPropagation.

btnInsideContainer.addEventListener("click",(e) => {
    e.stopPropagation();
    console.log("Event 2");
});
//Ações default
//removendo evento padrão

const a = document.querySelector("a");
a.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("não alterou a página");
});

//eventos de tecla
//keyup - pressiona e solta   keydown - pressiona e já funciona

//pega todas as teclas que aperta e solta
document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`)
});

document.addEventListener("keydown", (e) => {
    console.log(`clicou a tecla ${e.key}`)
})

//Outros eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou botão");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botão");
});
mouseEvents.addEventListener("dblclick", () => {
    console.log("clicou duas vezes o botão");
});

//event scroll
window.addEventListener("scroll", (e) =>{
    if(window.scrollX > 200){
        console.log("Paasamos de 200px")
    }
});

//Eventos por foco
//focus - quando focamos em um elemento   blur -quando perde o foco.
const input = document.querySelector("#my-input");

input.addEventListener("focus",(e) =>{
    console.log("entrou no input");
});

input.addEventListener("blur",(e) =>{
    console.log("saiu no input");
});

//Eventos de carregamento de página

window.addEventListener("load",() => {
    console.log("A página carregou!");
});

window.addEventListener("beforeunload",(e) => {
    e.preventDefault();
    e.returnValue = "mensagem ficava aqui";//nao funciona mais..
});

//Debounce
//técnica utilizada para fazer evento disparar menos vezes e poupar memoria.

const  debounce = ( f, delay) => {
    let timeout ;

    return (...arguments) =>{
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout( () =>{
            f.apply(arguments);
        }, delay);
    };
};
//desta forma ira executar a todo momento
//window.addEventListener("mousemove", ( ) =>{
  //  console.log("Execuntando evento")
//});


//desta forma ira executar apenas ao o comando que coloque
window.addEventListener("mousemove", debounce(()=> {
     console.log("Executando a cada 400s");
}, 400));
    