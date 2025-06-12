import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

import NotaLogo from "../../components/Logos/NotaLogo";
import BasicBtn from "../../components/Buttons/BasicBtn";

import "../../styles/variables.css";
import "../../styles/pages/create-account.css";
import createAccountBg from "../../assets/backgrounds/createaccount-bg.jpg";

import API_ENDPOINTS from "../../routes/apiEndpoints";
import { useAuth } from "../../context/AuthProvider";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Enter a valid email"),
  password: yup.string().required("Password is required"),
});

const CreateAccount = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Invalid login credentials");
        return;
      }
      toast.success("Account created successfully!");

      Cookies.set('access_token', result.user.access_token, { expires: 7, sameSite: 'lax' });
      Cookies.set('refresh_token', result.user.refresh_token, { expires: 30, sameSite: 'lax' });

      console.log("access_token", result.user.access_token)
      console.log("refresh-token", result.user.refresh_token)
      // Just use user info from response
      console.log('user:', result.user);
      setUser(result.user);

      toast.success("Login successful");
      navigate("/personalisation"); // or wherever you want
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="createaccount-page" style={{ backgroundImage: `url(${createAccountBg})` }}>
      <Toaster position="top-center" />
      <div className="createaccount-page-container">
        <NotaLogo />
        <h1 className="title">Create an account</h1>

        <form id="createAccountForm" onSubmit={handleSubmit(onSubmit)} className="form-container">
          <input type="email" placeholder="Email" className="input-field" {...register("email")} />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <input type="password" placeholder="Password" className="input-field" {...register("password")} />
          {errors.password && <p className="error-text">{errors.password.message}</p>}

          <BasicBtn
            text="Create account"
            onClick={() => document.getElementById("createAccountForm").requestSubmit()}
          />
        </form>

        <div className="login-link">
          <p className="or">or</p>
          <BasicBtn text="Login" onClick={() => navigate("/login")} />
        </div>

        <p className="terms">
          By clicking Create Account, you agree to our <span className="terms-link">Terms and Conditions.</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
