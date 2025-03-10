import clsx from "clsx";
import { getPagesArray } from "../../../utils/pages";
import Button from "../Button/Button";
import styles from "./Pagination.module.css";

type PaginationPropsType = {
    page: number;
    totalPages: number;
    changePage: (p: number) => void;
};

function Pagination({ page, totalPages, changePage }: PaginationPropsType) {
    const pages = getPagesArray(totalPages);
    return (
        <div className={styles["pagination"]}>
            {pages.map((p) => {
                const buttonClasses = clsx(
                    styles["pagination_button"],
                    page === p && styles["pagination_button__active"]
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
