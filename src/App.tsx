import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import { getInitAuth } from "./utils/auth";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(getInitAuth);

    return (
        <div className="app">
            <AuthContext.Provider value={{ isAuth, setIsAuth }}>
                <BrowserRouter>
                    <Navbar />
                    <AppRoutes />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
