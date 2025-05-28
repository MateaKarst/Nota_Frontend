import React from "react";
import NotaLogo from "../../components/Logos/NotaLogo";
import BasicBtn from "../../components/Buttons/BasicBtn";
import { useNavigate } from "react-router-dom";

import "../../styles/variables.css";
import "../../styles/pages/create-account.css";
import createAccountBg from "../../assets/backgrounds/createaccount-bg.jpg"; // background image import

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div
      className="createaccount-page"
      style={{ backgroundImage: `url(${createAccountBg})` }}
    >
      <div className="createaccount-page-container">
        <NotaLogo />
        <h1 className="title">Create an account</h1>

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

        <div className="login-link">
          <BasicBtn text="Create account" onClick={() => navigate("/personalisation")} />
          <p className="or">or</p>
          <BasicBtn text="Login" onClick={() => navigate("/login")} />
        </div>

        <p className="terms">
          By clicking Create Account, you agree to our{" "}
          <span className="terms-link">Terms and Conditions.</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
