import { PostType } from "../../App";
import PostItem from "./PostItem/PostItem";
import styles from "./PostList.module.css";

type PostListPropsType = {
    title?: string;
    posts: Array<PostType>;
    onRemovePostHandler: (id: number) => void;
};
function PostList({ title, posts, onRemovePostHandler }: PostListPropsType) {
    if (!posts.length) {
        return <h2 className="post-list_empty">Посты не найдены</h2>;
    }

    return (
        <div className={styles["post-list"]}>
            <h1 className={styles["post-list__title"]}>{title}</h1>
            {posts.map((post) => {
                const onRemovePost = () => {
                    onRemovePostHandler(post.id);
                };
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        onRemovePost={onRemovePost}
                    />
                );
            })}
        </div>
    );
}

export default PostList;
