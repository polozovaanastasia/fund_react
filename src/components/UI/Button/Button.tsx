import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonVariantType = "primary" | "outline";

type ButtonPropsType = {
    type?: "submit" | "reset" | "button";
    variant?: ButtonVariantType;
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

function Button({
    type = "submit",
    variant = "primary",
    children,
    className,
    ...props
}: ButtonPropsType) {
    const buttonClasses = clsx(
        styles["button"],
        variant === "primary" && styles["button__primary"],
        variant === "outline" && styles["button__outline"],
        className
    );
    return (
        <button className={buttonClasses} type={type} {...props}>
            {children}
        </button>
    );
}

export default Button;
