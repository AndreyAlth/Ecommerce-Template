import React from 'react';

function Login() {
    return (
        <div className="container">
            <div className="login-container">
                <div className="login">
                    <p className="login-title">Entrar</p>
                    <p className="login-text-1">Porfavor entrar con lo siguiente</p>
                    <input className="login-text-input login-input" type="text" placeholder="Correo" />
                    <input className="login-text-input login-input" type="text" placeholder="Contraseña" />
                    <a href="" className="login-text-password">¿Olvidaste tu contraseña?</a>
                    <button className="login-button">Entrar</button>
                    <hr className="division"/>
                    <a href="" className="login-text-password">¿No tienes una cuenta? Crear cuenta</a>
                    <button className="login-button">Continuar con Facebook</button>
                    <button className="login-button">Continuar con Google</button>

                </div>

            </div>
        </div>
    )
}

export default Login;
