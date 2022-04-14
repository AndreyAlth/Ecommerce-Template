import {products} from '../data/products';

export const getProductByCategory = ( category ) => {
    const validCategory = ['Destacado']
    if( !validCategory.includes( category )){
        throw new Error(`${ category } is not a valid category`)
    }
    return products.filter( hero => hero.category === category )
};
