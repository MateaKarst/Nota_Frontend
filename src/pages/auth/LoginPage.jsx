import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';

import NotaLogo from "../../components/Logos/NotaLogo";
import BasicBtn from "../../components/Buttons/BasicBtn";

import "../../styles/variables.css";
import "../../styles/pages/login-page.css";
import loginBg from "../../assets/backgrounds/login-bg.jpg";

import API_ENDPOINTS from "../../routes/apiEndpoints";
import { useAuth } from "../../context/AuthProvider";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Enter a valid email"),
    password: yup.string().required("Password is required"),
});

const LoginPage = () => {
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
            const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || "Invalid login credentials");
                return;
            }

            Cookies.set('access_token', result.access_token, { expires: 7, sameSite: 'lax' });
            Cookies.set('refresh_token', result.refresh_token, { expires: 30, sameSite: 'lax' });


            // Just use user info from response
            console.log('user:', result.user);
            setUser(result.user);

            toast.success("Login successful");
            navigate("/home");

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${loginBg})` }}>
            <Toaster position="top-center" />
            <div className="login-page-container">
                <NotaLogo />
                <h1 className="title">Welcome</h1>

                <form
                    id="loginForm"
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-container"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        {...register("email")}
                    />
                    {errors.email && <p className="error-text">{errors.email.message}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        {...register("password")}
                    />
                    {errors.password && <p className="error-text">{errors.password.message}</p>}

                    <BasicBtn
                        text="Login"
                        onClick={() => document.getElementById("loginForm").requestSubmit()}
                    />
                </form>

                <a className="forgot-password" href="/login">
                    Forgot your password?
                </a>

                <div className="or-create-account">
                    <p className="or">or</p>
                    <BasicBtn text="Create an account" onClick={() => navigate("/create-account")} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
