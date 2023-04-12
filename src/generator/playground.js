import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    return await response.json();
}

async function* interData(urlApi){
    try { 
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products[107]);
    
        const product = await fetchData(`${urlApi}/products/${products[107].id}`);
        yield console.log(product.title);
    
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);
    } catch (error) {
        console.error('Error', error);
    }
}

const dt = interData(API);
dt.next();
dt.next();

