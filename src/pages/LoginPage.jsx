import React from "react";
import NotaLogo from "../components/LogoNota";
import DefaultButton from '../components/DefaultButton';

import "../styles/variables.css";
import "../styles/pages/login-page.css";

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-page-container">
                <NotaLogo />
                <h1 className="title">Welcome</h1>
                <input type="email" name="Email" className="input-field" placeholder="Email" />
                <input type="password" name="Password" className="input-field" placeholder="Password" />
                <DefaultButton text='Login' />
                <a href="/" className="forgot-password">Forgot your password?</a>
                <p>or</p>
                <DefaultButton text='Create an account' />
            </div>
        </div>
    )
}

export default LoginPage;