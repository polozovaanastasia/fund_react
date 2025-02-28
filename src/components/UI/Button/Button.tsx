import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonPropsType = {
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

function Button({ children, className, ...props }: ButtonPropsType) {
    const buttonClasses = clsx(styles["button"], className);
    return (
        <button className={buttonClasses} type="button" {...props}>
            {children}
        </button>
    );
}

export default Button;
