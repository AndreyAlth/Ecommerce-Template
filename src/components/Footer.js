import React from 'react';
import facebookIcon from '../icons/facebook-icon.png';
import instagramIcon from '../icons/instagram-icon.png';

function Footer() {
    return (
        <footer>
            <div className="help">
                <div className="container">
                    <div className="help-2">
                        <div className="contact">
                            <h1 className="contact-title">Spilup</h1>
                            <a href="">
                                <p className="contact-text">
                                    Informacion de contacto<br/>
                                    Calle 71 Villmagna II
                                </p>
                            </a>
                        </div>
                        <div className="categories">
                            <h2 className="categories-title">Categorías</h2>
                            <ul className="categories-list">
                                <li>
                                    <a href="">Laptos y Computadoras</a>
                                </li>
                                <li>
                                    <a href="">Camaras y Fotografías</a>
                                </li>
                                <li>
                                    <a href="">Smart Phones y Tabletas</a>
                                </li>
                                <li>
                                    <a href="">Video Juegos y Consolas</a>
                                </li>
                                <li>
                                    <a href="">Auriculares contra agua</a>
                                </li>
                            </ul>
                        </div>
                        <div className="categories">
                            <h2 className="categories-title">Atención <br /> 
                            al cliente</h2>
                            <ul className="categories-list">
                                <li>
                                    <a href="">Mi cuenta</a>
                                </li>
                                <li>
                                    <a href="">Descuentos</a>
                                </li>
                                <li>
                                    <a href="">Reembolsos</a>
                                </li>
                                <li>
                                    <a href="">Historial de pedidos</a>
                                </li>
                                <li>
                                    <a href="">Seguimiento</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rights">
                <div className="container">
                    <div className="rights-2">
                        <p className="rights-paragraph">©Webecy - All Rights Reserved</p>
                        <div className="social">
                            <a href="">
                                <div className="social-container">
                                    <img src={facebookIcon} alt="" />
                                </div>
                            </a>
                            <a href="">
                                <div className="social-container">
                                    <img src={instagramIcon} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
