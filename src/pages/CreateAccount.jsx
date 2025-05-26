import React from "react";
import NotaLogo from "../components/Logos/NotaLogo";
import BasicBtn from "../components/Buttons/BasicBtn";
import { useNavigate } from "react-router-dom";

import "../styles/variables.css";
import "../styles/pages/create-account.css";

const CreateAccount = () => {
  const navigate = useNavigate();
  const onClickLogin = () => navigate("/login");
  const onCLickPersonalisation = () => navigate("/personalisation");

  return (
    <div className="createaccount-page">
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
       <div className ="login-link">
        <BasicBtn text="Create account" onClick={onCLickPersonalisation} />
        <p className="or">or</p>
        <BasicBtn text="Login" onClick={onClickLogin} />
        </div>
        <p className="terms">
          By clicking Create Account, you agree to our{" "}
          <p className="terms-link">Terms and Conditions.</p>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
