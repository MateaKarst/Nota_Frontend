
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const accessToken = Cookies.get("access_token");
            const refreshToken = Cookies.get("refresh_token");

            if (!accessToken && !refreshToken) {
                setUser(null);
                setLoading(false);
                return;
            }

            const res = await fetch("/api/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
                    ...(refreshToken ? { "x-refresh-token": refreshToken } : {}),
                },
                credentials: "include",
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

    // 👇 Only fetch user if no user was manually set (like from login)
    useEffect(() => {
        if (!user) fetchUser();
        else setLoading(false); // We already have a user, skip fetching
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}
