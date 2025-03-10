import clsx from "clsx";
import Button from "../Button/Button";
import styles from "./Pagination.module.css";

type PaginationPropsType = {
    pages: Array<number>;
    activePage: number;
    changePage: (p: number) => void;
};

function Pagination({ pages, activePage, changePage }: PaginationPropsType) {
    return (
        <div className={styles["pagination"]}>
            {pages.map((p) => {
                const buttonClasses = clsx(
                    styles["pagination_button"],
                    activePage === p && styles["pagination_button__active"]
                );
                return (
                    <span key={p} className={buttonClasses}>
                        <Button onClick={() => changePage(p)}>{p}</Button>
                    </span>
                );
            })}
        </div>
    );
}

export default Pagination;
