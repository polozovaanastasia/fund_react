import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
    const { isAuth, setIsAuth } = useAuth();
    const navigate = useNavigate();

    const NavbarClasses = clsx(
        styles["navbar"],
        isAuth && styles["navbar__is-auth"]
    );

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
        navigate("/login");
    };
    return (
        <div className={NavbarClasses}>
            {isAuth && (
                <>
                    <Link to="about" className={styles["navbar_item"]}>
                        About
                    </Link>
                    <Link to="posts" className={styles["navbar_item"]}>
                        Posts
                    </Link>
                    <Button variant="outline" onClick={logout}>
                        Выйти
                    </Button>
                </>
            )}
        </div>
    );
}

export default Navbar;
