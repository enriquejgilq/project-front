import React, { useEffect } from 'react';
import Login from '../components/Login';
import Register from '../components/Register'

import './style.css'
import { Button } from '@mui/material';

function LoginAndregister() {
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container1 = document.getElementById('container1');

        const handleSignUpClick = () => {
            container1?.classList.add("right-panel-active");
        };

        const handleSignInClick = () => {
            container1?.classList.remove("right-panel-active");
        };

        signUpButton?.addEventListener('click', handleSignUpClick);
        signInButton?.addEventListener('click', handleSignInClick);

        return () => {
            signUpButton?.removeEventListener('click', handleSignUpClick);
            signInButton?.removeEventListener('click', handleSignInClick);
        };
    }, []);
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className="container1" id="container1">
                <div className="form-container1 sign-up-container1">
                    <Register />
                </div>
                <div className="form-container1 sign-in-container1">
                    <Login />
                </div>
                <div className="overlay-container1">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>¡Bienvenido de nuevo!</h1>
                            <p>¿Ya tienes una cuenta?, Inicia sesión</p>
                            <Button variant='contained' id="signIn">Iniciar sesión</Button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hola!</h1>
                            <p>Puedes registrarte aqui</p>
                            <Button variant='contained' id="signUp">Registrarse</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAndregister