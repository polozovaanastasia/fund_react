import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export type RouteType = {
    path: string;
    element: React.ReactNode;
};
type RoutesType = Array<RouteType>;

export const privateRoutes: RoutesType = [
    { path: "posts", element: <Posts /> },
    { path: "posts/:id", element: <PostIdPage /> },
    { path: "about", element: <About /> },
    { path: "*", element: <Error /> },
];

export const publicRoutes: RoutesType = [
    { path: "login", element: <Login /> },
    { path: "*", element: <Error /> },
];
