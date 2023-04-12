// función que será pasada como argumento
function sum(num1, num2){
    return num1 + num2;
}

// no necesariamente tiene que llamarse callback, podemos agregarle otro nombre.
function calc(num1=0, num2=0, callback){
    return callback(num1, num2);
}

console.log(calc(3,2,sum));

// ejecutar código en un tiempo determinado
setTimeout(() => {
    console.log('Hola JavaScript gt')
}, 2000);

// ejemplo 3, pasando función como argumento y dandole un tiempo determinado
function gretting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'BlackSheep gt');