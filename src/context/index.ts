import { createContext } from "react";

type AuthContextType = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
