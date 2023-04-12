// construir una promesa, es algo que va a pasar: ahora, en un rato o nunca.
// promise, así se construye, con dos parámetros. Resolve y REject
const promise = new Promise((resolve, reject)=>{
    resolve("heeey!")
});

//then y catch.
const cows = 1;

const countCows = new Promise((resolve, reject)=>{
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject("There are no cows on the farm");
    }
});

countCows.then(result =>{ //anidar solictudes
    console.log(result);
}).catch(error =>{ //para ver errores
    console.log(error);
}).finally(()=> console.log("Finally"))//cuando ya termino la promesa, ya llegó a su final