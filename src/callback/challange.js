
// configurar y trabajar nuestro proyecto.
// una refrencia de lo que vamo a utilizar
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// llamado a nuestra api
const API='https://api.escuelajs.co/api/v1';

// crear una función para recibir la solicitud que nos está entregado el llamado a la API.
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    // primer recurso
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        // validar el estado en el que se encuentra
        // 0 no inicializado, 1 no llamado, 2 cuando ya se ejecutó, 3 interactuar, 4 cuando se ha completado.
        if(xhttp.readyState ===4){
            // 200 que la solicitud es correcta.
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Esto es n error '+urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`,function(erro1,data1){
    if(erro1) return console.error(erro1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        // ? optional chaning por si el id todavía no está disponible.
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

