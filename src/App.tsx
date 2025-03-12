import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
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
