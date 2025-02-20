import { OptionType, OptionValueType } from "../../../App";
import styles from "./Select.module.css";

type SelectPropsType = {
    value: string;
    options: Array<OptionType>;
    defaultValue: string;
    onChangeHandler: (optionValue: OptionValueType) => void;
};

function Select({
    value,
    options,
    defaultValue,
    onChangeHandler,
}: SelectPropsType) {
    function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onChangeHandler(event.target.value as OptionValueType);
    }
    return (
        <select className={styles["select"]} value={value} onChange={onChange}>
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
