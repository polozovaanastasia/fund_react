import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";

function AppRoutes() {
    const isAuth = false;
    return isAuth ? (
        <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />

            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
}

export default AppRoutes;
