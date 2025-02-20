import Button from "../../UI/Button/Button";
import styles from "./PostItem.module.css";

type PostItemPropsType = {
    id: number;
    title: string;
    body: string;
    onRemovePost: (id: number) => void;
};

function PostItem({ id, title, body, onRemovePost }: PostItemPropsType) {
    function onRemovePostHandler() {
        onRemovePost(id);
    }
    return (
        <div className={styles["post"]}>
            <div className={styles["post__content"]}>
                <h3 className={styles["post__title"]}>{title}</h3>
                {body}
            </div>
            <div className={styles["post__controls"]}>
                <Button onClick={onRemovePostHandler}>Удалить</Button>
            </div>
        </div>
    );
}

export default PostItem;
