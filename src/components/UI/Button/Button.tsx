import styles from "./Button.module.css";

type ButtonPropsType = {
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
};

function Button({ children, ...props }: ButtonPropsType) {
    return (
        <button className={styles["button"]} type="button" {...props}>
            {children}
        </button>
    );
}

export default Button;
