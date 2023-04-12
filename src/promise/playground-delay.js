
function delay(time, message) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

delay(3000, "Hello after 3s")
.then((message) => console.log(message))