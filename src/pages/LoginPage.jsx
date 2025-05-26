import React from "react";
import NotaLogo from "../components/Logos/NotaLogo";
import BasicBtn from "../components/Buttons/BasicBtn";
import { useNavigate } from 'react-router-dom'; 

import "../styles/variables.css";
import "../styles/pages/login-page.css";

const LoginPage = () => {
     const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-page-container">
                <NotaLogo />
                <h1 className="title">Welcome</h1>
                <input type="email" name="Email" className="input-field" placeholder="Email" />
                <input type="password" name="Password" className="input-field" placeholder="Password" />
                <BasicBtn text='Login'
                onClick={() => navigate("/home")} />
                <div className="forgot-password">
                <a className="forgot-password">Forgot your password?</a>
                <p className="or">or</p>
                <BasicBtn text='Create an account'
                onClick={() => navigate("/create-account")} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;