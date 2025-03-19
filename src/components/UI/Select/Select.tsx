import { OptionType, OptionValueType } from "../../../pages/Posts";
import styles from "./Select.module.css";

type SelectPropsType = {
    value: string | number | undefined;
    options: Array<OptionType>;
    defaultValue: string;
    onChange: (optionValue: OptionValueType) => void;
};

function Select({ value, options, defaultValue, onChange }: SelectPropsType) {
    function onChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        onChange(event.target.value as OptionValueType);
    }
    return (
        <select
            className={styles["select"]}
            value={value}
            onChange={onChangeHandler}
        >
            <option disabled>{defaultValue}</option>
            {options.map((option) => (
                <option
                    key={option.value}
                    className={styles["select__option"]}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
