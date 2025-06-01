import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function AuthRedirect() {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (user) {
                navigate("/home", { replace: true });
            } else {
                navigate("/onboarding", { replace: true });
            }
        }
    }, [user, loading, navigate]);

    return null; // This component just handles redirection, renders nothing
}

export default AuthRedirect
