import styles from "./Post.module.css";

type PostPropsType = {
    title: string;
    body: string;
};

function Post({ title, body }: PostPropsType) {
    return (
        <div className={styles["post"]}>
            <h2 className={styles["post_title"]}>{title}</h2>
            <div className={styles["post_body"]}>{body}</div>
        </div>
    );
}

export default Post;
