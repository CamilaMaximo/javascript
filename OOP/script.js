const animal ={
    nome: "BOb", //metodos propriedade que pode mudar
    latir : function() { //metodos que é uma função e pode executar
        console.log("au,au")
    }
};
console.log(animal.nome); 
animal.latir();

//aprimorando o metodo usando this

const pessoa = {
    nome:"Camila",

    getNome:function(){//método para retornar o nome
       return this.nome;
    },
    setNome: function(novoNome){ //método para mudar nome 
        this.nome = novoNome
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("livia");
console.log(pessoa.getNome());

//Prototype
//é uma espécie de herança
//fallback - verifica se exixte  o prototipo

const text ="asd"

console.log(Object.getPrototypeOf(text));
//aparecerá as propriedades de uma string

//classes básicas
const cachorro = {
    raca: null,
    patas: 4
};
const pastorAlemao = Object.create(cachorro);

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "bulldog";
console.log(bulldog)

//função com classes

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro

}
const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);
const jack = criarCachorro("jack", "Poodle");
console.log(jack);

//funç~es contrutoras - classes
//palavras chave: new *serve para intanciar os objetos
//inicio com letra maiuscula  será uma class.

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky)

// metodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("AUUUUUU!")
}

husky.uivar()

//classes ES6
//versões recentes que usa atualmente ano 2024

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}
const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

//mais sobre classes ES6
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}
const scania = new Caminhao (6, "vermelho");
console.log(scania)
scania.descreverCaminhao()//colocar na tela o que esta escrito

//Override
 class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
 }
 const matheus = new Humano("Matheus", 31);
 console.log(matheus);

 // adicionar algo novo ao objeto
 Humano.prototype.idade = "não definida";
 console.log(matheus.idade);

 //fazer valores constantes com symboll em classe

 class Aviao {
    constructor(marca, turbina){
        this.marca = marca
        this.turbina = turbina

    }
 }

 const asas = Symbol() //invocando o metodo
 const pilotos = Symbol()
 Aviao.prototype[pilotos] = 3 
 Aviao.prototype[asas] = 2


 const boeing = new Aviao("Boeing", 10);
 console.log(boeing)
 //para acessar a informação asas
 console.log(boeing[asas]);
 console.log(boeing[pilotos]);

 //GETTERS e SETTERS
 // get - exibir o valor de algum propriedade
 //set - altera o valor

 class Post{
    constructor(titulo, descrição, tags){
        this.titulo = titulo;
        this.descrição = descrição;
        this.tags = tags;
    }
    get exibirTitulos(){
        return `Você está lendo ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagArray = tags.split(",")
        this.tags = tagArray
    }
 }
//instanciar
const myPost =  new Post("Algum post", "E um post sobre programação");
console.log(myPost)
//para exibir o get
console.log(myPost.exibirTitulos);
// set- adicionar
myPost.adicionarTags = "programação", "Java", "JS";
console.log(myPost)

//herança
class Mamifero{
    constructor(patas){
        this.patas = patas
    }   
}
class Lobo extends Mamifero { //automaticamente pegando patas de mamifero
  constructor(patas,nome){
    super(patas,patas)//par enviar para o pai mamifero
    this.nome = nome

  }
}
 
const shark = new Lobo(4, "Shark");
console.log(shark)

//operador instanceof - verifica se um obj é pai do outro

console.log(shark instanceof Lobo);//verificar class de classe
console.log(new Lobo(4, "teste") instanceof Mamifero);//para verificar de objeto para class
console.log( new Post("a","b") instanceof Lobo);//novamente de class para objeto


