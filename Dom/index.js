//acessar as propriedades pelo DOM

console.log(document.body);//acessar as propriedades de body

console.log(document.body.childNodes);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

//select por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

//select por Id

const title = document.getElementById("title");
console.log(title);

//Encontrar elementos por classe

const produto   = document.getElementsByClassName("product");
console.log(produto);

//encontrando elementos por CSS

const productQuery  = document.querySelectorAll("product");
console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

//alterando o HTML com insertBefore
//O insetBefore cria um elemento antes de um outro.
//Pode ser feiro com createElemnt.

const p = document.createElement("p");

//pegar o um elemnento do header
const header = title.parentElement;
console.log(header)
//inserir  antes do titulo 
header.insertBefore(p,title);


//Metodo appendChild
//adicionar um elemento dentro do outro

const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");//criar mais um "li"
navLinks.appendChild(li); //colocalo no "nav li" puxado lá em cima


//replaceChild
//trocar elemento
const h2 = document.createElement("h2");
h2.textContent = "Meu novo titulo!"
header.replaceChild(h2, title);//1 o que ira aparecer, 2 oonde irá substituir

//Criando nós de text
//é outro método de adicionar texto ao html

const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);
const h3 = document.createElement("h3");//criar o titulo
h3.appendChild(myText);//lincar o text ao h3
console.log(h3);
mainContainer.appendChild(h3);//aqui é para adicionar o text do h3 no html atraves do id ou class.

//alterando atributos
//ler - get Attribute  alterar- setAttribute

const firstLink = navLinks.querySelector("a");
console.log(firstLink);
firstLink.setAttribute("href", "https://www.linkedin.com/in/camilaaleixomaximo/");
//para abrir em uma nova aba
firstLink.setAttribute("target","_blank");

//Altura e largura dos elementos
//offsetWidth -largura    offsetHeight- altura
//desconsiderar bordas e temas 
//clientWidth e clientHeight

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);//saber tamanho
console.log(footer.offsetHeight);

console.log(footer.clientWidth);//saber tamanho de borda
console.log(footer.clientHeight);

//posição do elemento
//pegar varias informações de um elemento.
const product = produto[0]
console.log(product.getBoundingClientRect());

//Alterando estilos em js

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom ="15px";

//Estilizando varios itens - HTMLCollection

for(const li of listItens){
    li.style.backgroundColor = "gray";
    li.style.padding = "10px";
}



