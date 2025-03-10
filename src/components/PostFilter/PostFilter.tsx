import { FilterType } from "../../pages/Posts";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import styles from "./PostFilter.module.css";

type PostFilterPropsType = {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
};

function PostFilter({ filter, setFilter }: PostFilterPropsType) {
    return (
        <div className={styles["post-filter"]}>
            <Input
                value={filter.query}
                placeholder="Поиск..."
                onChange={(value) => setFilter({ ...filter, query: value })}
            />
            <br />
            <Select
                value={filter.sort}
                options={[
                    { value: "title", label: "По названию" },
                    { value: "body", label: "По описанию" },
                ]}
                defaultValue="Сортировать"
                onChange={(value) => setFilter({ ...filter, sort: value })}
            />
        </div>
    );
}

export default PostFilter;
