

import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    // creareos una estructura de datos
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors', //cors permisos que tendrá
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}

const data = {
        "title": "New product prueba",
        "price": 888,
        "description": "A description.",
        "categoryId": 1,
        "images": [
            "https://placeimg.com/640/480/any?r=0.9178516507833767"
        ]
    }

postData(`${API}/products`,data)
    .then(response => response.json())
    .then(data => console.log(data))
    .finally(console.log("terminado"));

