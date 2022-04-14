import { products } from '../data/products';

export const getProductById = ( id = '') => {
    console.log('enviar producto')
    return products.find( product => product.id === id)
};