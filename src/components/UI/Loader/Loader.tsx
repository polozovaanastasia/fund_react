import styles from "./Loader.module.css";

type LoaderPropsType = {
    size?: number;
    color?: string;
};

function Loader({ size = 24, color = "rgb(7, 153, 95)" }: LoaderPropsType) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["loader"]}
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                stroke="rgba(0, 0, 0, 0.1)" // Серый цвет (фон)
                strokeWidth="4"
                fill="none"
            />
            <circle
                cx="25"
                cy="25"
                r="20"
                stroke={color} // Цвет активного сегмента
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="125" // Длина окружности (примерно 2 * π * r)
                strokeDashoffset="100" // Смещение (делает кусочек)
                className={styles["spinner"]}
            />
        </svg>
    );
}

export default Loader;
