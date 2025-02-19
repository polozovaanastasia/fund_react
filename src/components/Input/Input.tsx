import styles from "./Input.module.css";

type InputPropsType = {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
};

function Input({ value, placeholder, onChange }: InputPropsType) {
    return (
        <input
            className={styles["input"]}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
        />
    );
}

export default Input;
