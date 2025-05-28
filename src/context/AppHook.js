"use client";
import { useContext } from "react";
import { AppUtilsContext } from "./AppUtils";

const useAppHook = () => {
    const context = useContext(AppUtilsContext);
    if (!context) {
        throw new Error("useAppHook must be used within AppUtilsProvider");
    }
    return context;
};

export default useAppHook;