import React from 'react';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react/cjs/react.production.min';
import Banner from '../Banner';
import {getProductById} from '../selectors/getProductById';

function ProductScreen() {
    const { productId } = useParams();
    const product = getProductById(productId)
    const {
        id,
        title,
        price,
        description,
        images
    } = product;

    return (
        <>
        <Banner title="Detalles de Producto"/>
        <div className="container">
            <div className='row row-container'>
                <div className="col-6">
                    <div className="grid-image">
                        <img className='grid-image-1' src={images[0]} alt="" />
                        <img className='grid-image-2' src={images[1]} alt="" />
                        <img className='grid-image-3' src={images[2]} alt="" />
                        <img className='grid-image-4' src={images[3]} alt="" />
                    </div>
                </div>
                <div className="col-6 info-content">
                    <div className='product-info'>
                        <h2 className='product-title'>{title}</h2>
                        <span><strong className='pruduct-price'>${price}</strong></span>
                        <p className='paragraph-inf'>{description}</p>
                        <span className='product-add-car'>Añadir al carrito</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductScreen
