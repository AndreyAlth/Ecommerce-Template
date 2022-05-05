import React from 'react';
import { Link } from 'react-router-dom';
import chair1 from '../images/chair1.png';
import chair2 from '../images/chair2.png';
import chair3 from '../images/chair3.png';
import chair4 from '../images/chair4.png';
import {getProductByCategory} from './selectors/getProductByCategory';


function Viewer() {
    const title = "Productos Destacados"
    const featuredProducts = getProductByCategory("Destacado")
    return (
        <div className="viewer xl:px-80 lg:px-80 md:px-10 sm:px-5">
            <p className="title lg:text-4xl sm:text-4xl mobile:text-8xl my-4">{title}</p>
            <div className="products grid grid-cols-12 gap-6">
                {
                    featuredProducts.map( product => (
                        <div className="card-viewer col-span-full sm:col-span-6 xl:col-span-3">
                            <Link to={`/product/${product.id}`}>
                                <div className="flex flex-col">
                                    <img className="w-full" src={product.images[0]} alt="chair"/>
                                </div>
                                <div className="card-body grow flex flex-col">
                                    <p className="card-title text-lg">
                                        {product.title}
                                    </p>
                                    <p className="card-price">
                                        ${product.price}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Viewer;
