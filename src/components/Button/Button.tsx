import styles from "./Button.module.css";

type ButtonPropsType = {
    children: React.ReactNode;
    onClick: () => void;
};

function Button({ children, onClick }: ButtonPropsType) {
    return (
        <button className={styles["button"]} type="button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
