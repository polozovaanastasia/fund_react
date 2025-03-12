import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
    const context = useContext(AuthContext);
    console.log("AuthContext value:", context);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
