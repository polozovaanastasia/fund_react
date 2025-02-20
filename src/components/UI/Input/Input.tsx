import styles from "./Input.module.css";

type InputPropsType = {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
};

function Input({ value, placeholder, disabled, onChange }: InputPropsType) {
    return (
        <input
            className={styles["input"]}
            type="text"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(event) => onChange(event.target.value)}
        />
    );
}

export default Input;
