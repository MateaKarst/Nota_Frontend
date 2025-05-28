import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Move token reads inside fetchUser so it always reads latest tokens from cookies
    const fetchUser = async () => {
        try {
            const accessToken = Cookies.get("access_token");
            const refreshToken = Cookies.get("refresh_token");

            const res = await fetch("/api/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
                    ...(refreshToken ? { "x-refresh-token": refreshToken } : {}),
                },
                credentials: "include", // optional if you want to send cookies automatically
            });

            if (res.ok) {
                const { user } = await res.json();
                console.log("Fetched user:", user);
                setUser(user);
            } else {
                console.log("No user found (401?)");
                setUser(null);
            }
        } catch (e) {
            console.log("Error fetching user:", e);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}
