import { CommentsType } from "../../pages/PostIdPage";
import styles from "./CommentsList.module.css";

type CommentsListPropsType = {
    comments: CommentsType;
};

function CommentsList({ comments }: CommentsListPropsType) {
    return (
        <div className={styles["comments-list"]}>
            <h3 className={styles["comments-list_header"]}>Комментарии:</h3>
            {comments.map((c) => (
                <div className={styles["comment"]}>
                    <div className={styles["comment_header"]}>
                        <div className={styles["comment_name"]}>{c.name}</div>
                        <div className={styles["comment_email"]}>{c.email}</div>
                    </div>
                    <div className={styles["comment_body"]}>{c.body}</div>
                </div>
            ))}
        </div>
    );
}

export default CommentsList;
