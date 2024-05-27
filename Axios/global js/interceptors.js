//requisição 
postsFetch.interceptors.request.use(
    //caso acontça algum erro
    function(config){
        console.log("Antes da requisição");
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);


//Resposta 
postsFetch.interceptors.request.use(
    //caso acontça algum erro
    function(response){
        console.log("Antes da resposta...");
        return response;
    },
    function(error){
        return Promise.reject(error);
    }
);

