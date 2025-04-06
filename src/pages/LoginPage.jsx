import React from "react";
import "../styles/variables.css";
import NotaLogo from "../components/LogoNota";
import "../styles/pages/LoginPage.css";
import DefaultButton from '../components/DefaultButton';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-page-container">
                <NotaLogo />
                <h1 className="title">Welcome</h1>
                <input type="email" name="Email" className="input-field" placeholder="Email" />
                <input type="password" name="Password" className="input-field" placeholder="Password" />
                <DefaultButton text='Login' />
                <a href="#" className="forgot-password">Forgot your password?</a>
                <p>or</p>
                <DefaultButton text='Create an account' />

            </div>
        </div>

    )
}

export default LoginPage;