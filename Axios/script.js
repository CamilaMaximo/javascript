//instalação
console.log(axios);

//Primeiro request 

//- método get "pegar" try catch indentificarpossiveis erros. 
// como o Aixos +e baseado em promises,podemos utilizar as async functions;
//JSON placeholder - API falsa gratuita para testes e prototipagem.

const getData = async () => {
    try{
        const response = await postsFetch.get(
    "/users",
    //USAR O AXIOS PARA CONF HEADERS
    //definindo o headers com axios
    {
        headers:{
            "content-type": "application/json",
            custom: "header",
        },
    }
);
console.log(response);

return response.data;// aqui é para retornar apenas os dados e serve para poder jogar na tela as informações.

 }catch (error) {
    console.log(error);
 };
};
getData();

//imprimindo dados da API na tela

const container = document.querySelector("#user-container");

const printDate = async () => {
    const data = await getData()
    console.log(data);

    data.forEach((user) => {
        //criar os elementos e usar-los para jogar na tela a informação

        //imprimindo nome na tela dentro da div
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;

        //imprimindo email na tela aproveitando a div
        const emailElemente = document.createElement("p");
        emailElemente.textContent = user.email;
        //chamar na tela dentro da div
        div.appendChild(emailElemente);

        div.appendChild(nameElement);
        container.appendChild(div);
        
    });
}
printDate();

//Post Axios
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("body");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    postsFetch.post("posts",{
        title: titleInput.value,
        bady: bodyInput.value,
        userId: 1
        
    });

});

//GLOBAL INSTANCE DO AXIOS



