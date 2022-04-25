import React from 'react'
import login from '../icons/login.png';
import wishlist from '../icons/wishlist.png';
import carshop from '../icons/carshop.png'
import { Link } from 'react-router-dom';

function HeadingBar() {
    return (
        <div className="headingBar">
            <div className="container headingBar-container">
                <ul>
                    <li>
                        <Link to="login">Entrar</Link>
                        <img src={login} alt="Login" />
                    </li>
                    <li>
                        <a href="">Lista de Deseos</a>
                        <img src={wishlist} alt="Login" />
                    </li>
                    <li>
                        <a href=""></a>
                        <img src={carshop} alt="Login" />
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default HeadingBar
