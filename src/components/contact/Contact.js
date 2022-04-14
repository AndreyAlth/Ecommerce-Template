import React from 'react'
import EllipseGreen from '../../icons/ellipse-green.png';
import EllipseMelon from '../../icons/ellipse-melon.png';
import EllipsePink from '../../icons/ellipse-pink.png';
import EllipsePurple from '../../icons/ellipse-purple.png';
import formImage from '../../images/form-image.png';

function Contact() {
    return (
        <section>
            <div className="help-contact">
                <div className="container">
                    <div className="help-2-contact">
                        <div className="contact pt-4">
                            <div className="contact-title">Contáctanos</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-inf pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col col-inf col-inf-m">
                            <div className="contact-inf-text">
                                Informacion sobre Nosotros
                            </div>
                            <p className="paragraph-inf">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mattis neque ultrices mattis aliquam, malesuada diam est. 
                            Malesuada sem tristique amet erat vitae eget dolor lobortis. 
                            Accumsan faucibus vitae lobortis quis bibendum quam.
                            </p>
                        </div>
                        <div className="col col-inf col-inf-m">
                            <div className="contact-inf-text">
                                Forma de contacto
                            </div>
                            <div className="row mb-2">
                                <div className="col col-inf-circle">
                                    <img src={EllipsePurple} alt="icon" className="me-2" />
                                    <div>
                                        <p className="paragraph-inf ">
                                            Tel: <a>999 906 3226</a>
                                            <br/>
                                            E-mail: <a>contact@spilup.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col col-inf-circle">
                                    <img src={EllipsePink} alt=""  className="me-2"/>
                                    <p className="paragraph-inf ">
                                        Attención al cliente <br/>
                                        y Soporte
                                    </p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col col-inf-circle">
                                    <img src={EllipseMelon} alt="" className="me-2" />
                                    <p className="paragraph-inf ">
                                        <a>
                                            C. 71 #630 x 42b y 44 VillaMagna II
                                        </a>
                                    </p>
                                </div>
                                <div className="col col-inf-circle">
                                    <img src={EllipseGreen} alt="" className="me-2" />
                                    <p className="paragraph-inf ">
                                        Envíos <br/>
                                        Nacionales
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-inf col-inf-m">
                            <div className="contact-inf-text mb-3">
                                Envíanos un mensaje
                            </div>
                            <p className="paragraph-inf mb-4">Te leemos sobre cualquier comentario que tengas</p>
                            <label className='form form-text' htmlFor="">
                                Nombre
                                <input className='form-box ps-2' required name='nombre' id='form-name' type="text" placeholder='Nombre' />
                            </label>
                            <label className='form form-text' htmlFor="">
                                Correo Electrónico
                                <input className='form-box ps-2' required name='mail' id='form-mail' type="email" placeholder='ejemplo@mail.com' />
                            </label>
                            <label className='form form-text' for="form-message">
                                Mensaje
                                <textarea className='form-box ps-2' required name='message' placeholder='Mensaje' id='form-message' cols="30" rows="7"/>
                            </label>
                            <button className='buy-button mt-3'>Enviar</button>
                        </div>
                        <div className="col">
                            <img src={formImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
