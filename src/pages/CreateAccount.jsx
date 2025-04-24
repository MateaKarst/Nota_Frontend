import React from "react";
import NotaLogo from "../components/LogoNota";
import DefaultButton from '../components/DefaultButton';

import "../styles/variables.css";
import "../styles/pages/create-account.css";

const CreateAccount = () => {
    return (
        <div className="createaccount-page">
            <div className="createaccount-page-container">
                <NotaLogo />
                <h1 className="title">Create an account</h1>
                <input type="email" name="Email" className="input-field" placeholder="Email" />
                <input type="password" name="Password" className="input-field" placeholder="Password" />
                <DefaultButton text='Create account' />
                <p>or</p>
                <DefaultButton text='Login' />
                <p>By clicking Create Account, you agree to our <a href="/">Terms and Conditions.</a></p>
            </div>
        </div>

    )
}

export default CreateAccount;