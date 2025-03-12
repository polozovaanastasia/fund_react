import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Navbar.module.css";

function Navbar() {
    const { isAuth } = useAuth();
    // debugger;
    const NavbarClasses = clsx(
        styles["navbar"],
        isAuth && styles["navbar__is-auth"]
    );
    return (
        <div className={NavbarClasses}>
            {isAuth ? (
                <>
                    <Link to="about" className={styles["navbar_item"]}>
                        About
                    </Link>
                    <Link to="posts" className={styles["navbar_item"]}>
                        Posts
                    </Link>
                </>
            ) : (
                <Link to="login" className={styles["navbar_item"]}>
                    Login
                </Link>
            )}
        </div>
    );
}

export default Navbar;
