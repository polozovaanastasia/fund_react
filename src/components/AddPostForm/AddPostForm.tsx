import { useState } from "react";
import { PostType } from "../../pages/Posts";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./AddPostForm.module.css";

type AddPostFormPropsType = {
    onAddPostHandler: (newPost: PostType) => void;
};

function AddPostForm({ onAddPostHandler }: AddPostFormPropsType) {
    const [post, setPost] = useState<Omit<PostType, "id">>({
        title: "",
        body: "",
    });

    function onChangePostTitle(updatedTitle: string) {
        setPost({ ...post, title: updatedTitle });
    }

    function onChangePostBody(updatedBody: string) {
        setPost({ ...post, body: updatedBody });
    }
    function addPost() {
        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body,
        };
        onAddPostHandler(newPost);
        setPost({ title: "", body: "" });
    }
    return (
        <form className={styles["add-post-form"]}>
            <Input
                value={post.title}
                placeholder="Название поста "
                onChange={onChangePostTitle}
            />
            <Input
                value={post.body}
                placeholder="Описание поста "
                onChange={onChangePostBody}
            />
            <Button onClick={addPost}>Добавить пост</Button>
        </form>
    );
}

export default AddPostForm;
