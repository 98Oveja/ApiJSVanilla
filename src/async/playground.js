import fetch from 'node-fetch';

const url = 'https://domain-api-com';

const fetchData = async (urlApi)=>{
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi)=>{
    try{
        const products = await fetchData(`${urlApi}/products`);
    }catch(error){
        throw new Error('API Not Found');
    }
}

anotherFn(url);