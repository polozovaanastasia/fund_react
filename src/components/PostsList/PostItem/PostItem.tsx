import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./PostItem.module.css";

type PostItemPropsType = {
    id: number;
    title: string;
    body: string;
    onRemovePost: (id: number) => void;
};

function PostItem({ id, title, body, onRemovePost }: PostItemPropsType) {
    const navigate = useNavigate();

    const openPost = () => {
        navigate(`/posts/${id}`);
    };

    function onRemovePostHandler() {
        onRemovePost(id);
    }
    return (
        <div className={styles["post"]}>
            <div className={styles["post__content"]}>
                <h3 className={styles["post__title"]}>
                    {id}. {title}
                </h3>
                {body}
            </div>
            <div className={styles["post__controls"]}>
                <Button variant="outline" onClick={openPost}>
                    Открыть
                </Button>
                <Button onClick={onRemovePostHandler}>Удалить</Button>
            </div>
        </div>
    );
}

export default PostItem;
