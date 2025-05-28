"use client";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "../routes/routesConfig";
import useAppHook from "./AppHook";

const PUBLIC_ROUTES = appRoutes
    .filter(route => route.isPublic)
    .map(route => route.path);

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, loading } = useAppHook();
    const navigate = useNavigate();
    const location = useLocation();

    const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);

    useEffect(() => {
        if (!loading && !isLoggedIn && !isPublicRoute) {
            navigate("/login");
        }
    }, [isLoggedIn, isPublicRoute, navigate, loading]);

    if (loading) return <div>Loading...</div>;

    return <>{children}</>;
};

export default ProtectedRoute;
