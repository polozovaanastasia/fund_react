import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
