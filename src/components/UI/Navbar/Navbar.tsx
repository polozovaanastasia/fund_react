import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles["navbar"]}>
            <Link to="about" className={styles["navbar_item"]}>
                About
            </Link>
            <Link to="posts" className={styles["navbar_item"]}>
                Posts
            </Link>
            <Link to="login" className={styles["navbar_item"]}>
                Login
            </Link>
        </div>
    );
}

export default Navbar;
