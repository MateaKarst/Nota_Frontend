"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppUtilsContext = createContext(undefined);

const AppUtilsProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await fetch("/api/auth/me", { cache: "no-store" });
            if (res.ok) {
                const { user } = await res.json();
                if (user) {
                    setIsLoggedIn(true);
                    setAuthUser({
                        email: user.email,
                        name: user.user_metadata?.name || "",
                    });
                }
            } else {
                setIsLoggedIn(false);
                setAuthUser(null);
            }
        } catch {
            setIsLoggedIn(false);
            setAuthUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AppUtilsContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                authUser,
                cookies: null,
                setCookies: () => { },
                loading,
                refreshUser: fetchUser,
            }}
        >
            {children}
        </AppUtilsContext.Provider>
    );
};

export default AppUtilsProvider;
