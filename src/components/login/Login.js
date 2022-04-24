import { Axios } from 'axios';
import React, {useState} from 'react';
const axios = require('axios').default;


function Login() {
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser() {

        

        try {
            const data = JSON.stringify({correo, password})
            // const data = {correo, password}
            console.log(data)

            await axios({
                method: 'POST',
                url: 'http://localhost:8080/api/auth/login',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'Accept':'*/*',
                },
                data
              })
              .then( (res) => console.log(res))
              .then( data => {
                  console.log(data);
              })
              .catch(error => {
                console.log(error.response, error.message, error.request.response)
            });
            
        } catch (error) {
        }


        

        
        // const options = {
        //     headers: {
        //         'Content-type': 'text/plain'
        //     }
        // }
        // try {
        //     const response = await axios.post('http://localhost:8080/api/auth/login', {
        //         correo: correo,
        //         password: password
        //     },{ options}).then((res) => {
        //         console.log(res)
        //     })
        //     console.log(response);

        //     // const response = await fetch('http://localhost:8080/api/auth/login', {
        //     //     method: "POST",
        //     //     headers: {
        //     //         'Content-Type': 'application/json'
        //     //     },
        //     //     body: body
        //     // })
        //     console.log(response);
        // } catch (error) {
        //   console.error(error);
        // }
      }

    return (
        <div className="container">
            <div className="login-container">
                <div className="login">
                    <p className="login-title">Entrar</p>
                    <p className="login-text-1">Porfavor entrar con lo siguiente</p>
                    <input id='correo-input' className="login-text-input login-input" type="text" placeholder="Correo" onChange={ e => setCorreo(e.target.value)}/>
                    <input id='password-input' className="login-text-input login-input" type="text" placeholder="Contraseña" onChange={ e => setPassword(e.target.value)}/>
                    <a href="" className="login-text-password">¿Olvidaste tu contraseña?</a>
                    <button 
                    className="login-button"
                    onClick={loginUser}
                    >Entrar</button>
                    <hr className="division"/>
                    <a href="" className="login-text-password">Entrar con </a>
                    {/* <button className="login-button">Continuar con Facebook</button> */}
                    <>
                        <div id="g_id_onload"
                            data-client_id="352076934220-ag28gal5n4ee1lb1niv7qv4dkr47k9m4.apps.googleusercontent.com"
                            data-auto_prompt="false"
                            data-callback="handleCredentialResponse">
                        </div>
                        <div class="g_id_signin"
                            data-type="standard"
                            data-size="large"
                            data-theme="outline"
                            data-text="sign_in_with"
                            data-shape="rectangular"
                            data-logo_alignment="left">
                        </div>
                    </>
                </div>

            </div>
            
        </div>
    )
}

export default Login;
