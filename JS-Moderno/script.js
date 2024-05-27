// let e const


//neste caso não avisa que já existe e o valor interno e externo são modificados
var x = 10;
var y = 15;
 
if(y > 10){
    var x = 5;
    console.log(x);
}

console.log(x)


//Neste caso o valor interno é um e o externo outro
let a = 10;
let b = 15;
if( b > 10){
    let a = 5;
    console.log(a);
}
console.log(a);


function logNome(){
    const nome = "Camila";
    console.log(nome);
};

const nome = "Matheus";

logNome()
console.log(nome);


//Arrow
const sum = function(a, b){
    return a - b
}

const arrowSum = (a, b) => a - b;

console.log(sum(5,15));
console.log(arrowSum(5,15));

//filter

const arr = [1,2,3,4,5,6];

const highNumber = arr.filter((n) => {
    if (n >= 3){
        return n;
    }
});
console.log(highNumber);

const users = [
    {name:"matheus", available: true},
    {name:"Paulo", available: false},
    {name:"Maria", available: true},
    {name:"Silvana", available: false},
    {name:"Carolina", available: true},
]
const available = users.filter((users) => users.available);
console.log(users);

//Map- modificar o array de origem
const products = [
    {name:"Camisa", price: 10.90, category:"Roupa" },
    {name:"chaleira Elétrica", price: 150, category:"Eletro" }, 
    {name:"Fogão", price: 499, category:"Eletro" }, 
    {name:"Calça jeans", price: 87.90, category:"Roupa" },  
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
});

console.log(products);
//Template literals

const userName = "Camila";
const age = 34;

console.log(`O usuário ${userName} e tem ${age} anos.`);

//Destructuring- desestruturas dados  complexos em várias variáveis;

const fruits = ["maçã", "mamão", "laranja"];

const[f1, f2, f3] = fruits;

console.log(f1,f3);



//outro exemplo
const productDetalis = {
    name:"Mouse",
    price: 39.99,
    category: "periférico",
    color: "Cinza"
}

const {name: productName, price,category,color} = productDetalis;

console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`);

//spred operator
const a1 =[1,2,3];
const a2 =[4,5,6];

const a3 =[...a1,...a2] //coloca os doia arrays aqui dentro
console.log(a3);

const a4 = [0, ...a3, 7]; //mesclar um array
console.log(a4);

//outro exemplo
const carName = {name:"Gol"};
const carBrand = {Brand:"vw"};
const otherInfo = {km:"10000", price: 4999};

const car = {...carName, ...carBrand, ...otherInfo};
console.log(car);

//Classes
class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount){ 
        return this.price *((100 - discount) /100);
    }
};
const shirt = new product("camisa gola v", 20);
console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

//herança- herdar métodos e classes de outra usar EXTENDS /SUPER

class productwithAttributes extends product{
    constructor(name, price, color){
        super(name,price)
        this.colors = color
    }
    showColors(){
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
            
        });
    }
}
const hat = new productwithAttributes("chapéu",29.99,["preto","Amarelo","Verde"]);

console.log(hat);
console.log(hat.name);
hat.showColors();

//Axios é uma bibloioteca para requisição HTTP
//axios é promise based, ou seja, retorna promesa de suas funções
//AGORA é usado o fetch.

