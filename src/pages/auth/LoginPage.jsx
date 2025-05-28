import React from "react";
import NotaLogo from "../../components/Logos/NotaLogo";
import BasicBtn from "../../components/Buttons/BasicBtn";
import { useNavigate } from "react-router-dom";

import "../../styles/variables.css";
import "../../styles/pages/login-page.css";

import loginBg from "../../assets/backgrounds/login-bg.jpg"; // Make sure this path is correct

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div
            className="login-page"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="login-page-container">
                <NotaLogo />
                <h1 className="title">Welcome</h1>

                <input
                    type="email"
                    name="Email"
                    className="input-field"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="Password"
                    className="input-field"
                    placeholder="Password"
                />

                <BasicBtn text="Login" onClick={() => navigate("/home")} />

                    <a className="forgot-password" href="/login">
                        Forgot your password?
                    </a>

                <div className="or-create-account">
                    <p className="or">or</p>
                    <BasicBtn
                        text="Create an account"
                        onClick={() => navigate("/create-account")}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
