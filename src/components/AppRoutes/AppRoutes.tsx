import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts";

function AppRoutes() {
    return (
        <Routes>
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostIdPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRoutes;
