

const text1 = document.querySelector("#id");
const text2 = document.querySelector("#name");
const text3 = document.querySelector("#species");
const img = document.querySelector("#img");
const btn = document.querySelector("#btn");


btn.addEventListener("click", ejecutar);

// ya lo tiene el navegador
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API= "https://rickandmortyapi.com/api";

function ejecutar(){
    let entrada = document.getElementById("entrada").value;

    fetchData(`${API}/character/${entrada}`, function(error1, data1){
        if(error1) return console.error(error1);
        // console.log(data1);
        console.log("entr "+entrada);
        console.log(data1.id);
        console.log(data1.name);
        console.log(data1.image);
        text1.innerHTML = "ID: "+data1.id;
        text2.innerHTML = "NAME: "+data1.name;
        text3.innerHTML = "SPECIE: "+data1.species;
        img.src = `${data1.image}`;
    });
}

function fetchData(apiUrl, funcioncita){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", apiUrl, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if (xhttp.status === 200) {
                funcioncita(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Esto es error '+apiUrl);
                return funcioncita(error, null);
            }
        }
    }
    xhttp.send();
}

