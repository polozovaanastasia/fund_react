import styles from "./Input.module.css";

type InputPropsType = {
    value: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
};

function Input({
    value,
    type = "text",
    placeholder,
    disabled,
    onChange,
}: InputPropsType) {
    return (
        <input
            className={styles["input"]}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(event) => onChange(event.target.value)}
        />
    );
}

export default Input;
