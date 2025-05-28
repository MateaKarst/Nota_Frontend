// src/context/ProtectedRoute.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { appRoutes } from "../routes/routesConfig";

const PUBLIC_ROUTES = appRoutes.filter(route => route.isPublic).map(route => route.path);

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const isPublic = PUBLIC_ROUTES.includes(location.pathname);

    useEffect(() => {
        if (!loading && !user && !isPublic) {
            navigate("/login");
        }
    });


    if (loading) return <div>Loading...</div>;

    return <>{children}</>;
};

export default ProtectedRoute;
