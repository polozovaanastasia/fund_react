import { FilterType } from "../../App";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

type PostFilterPropsType = {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
};

function PostFilter({ filter, setFilter }: PostFilterPropsType) {
    return (
        <>
            <Input
                value={filter.query}
                placeholder="Поиск..."
                onChange={(value) => setFilter({ ...filter, query: value })}
            />
            <Select
                value={filter.sort}
                options={[
                    { value: "title", label: "По названию" },
                    { value: "body", label: "По описанию" },
                ]}
                defaultValue="Сортировать"
                onChange={(value) => setFilter({ ...filter, sort: value })}
            />
        </>
    );
}

export default PostFilter;
