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
        <div className="viewer">
            <p className="title">{title}</p>
            <div className="products">
                {
                    featuredProducts.map( product => (
                        <div className="card-viewer">
                            <Link to={`/product/${product.id}`}>
                                <div className="card-image-container-viewer">
                                    <img className="card-image" src={product.images[0]} alt="chair"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">
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
