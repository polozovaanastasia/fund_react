import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ClassCounter from "./components/Counter/classCounter";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import PostList from "./components/PostsList/PostList";

export type PostType = {
    id: number;
    title: string;
    content: string;
};

function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {
            id: 1,
            title: "JavaScript",
            content:
                "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
        },
        {
            id: 2,
            title: "TypeScript",
            content:
                "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        },
        {
            id: 3,
            title: "React",
            content:
                "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        },
    ]);

    const [postTitle, setPostTitle] = useState<string>("");
    const [postDescription, setPostDescription] = useState<string>("");

    function onChangePostTitle(updateTitle: string) {
        setPostTitle(updateTitle);
    }

    function onChangePostDescription(updateDescription: string) {
        setPostDescription(updateDescription);
    }

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function addPost() {
        setPosts((lastPosts) => [
            ...lastPosts,
            {
                id: lastPosts.length + 1,
                title: postTitle,
                content: postDescription,
            },
        ]);
    }
    return (
        <div className="app">
            <Counter />
            <ClassCounter />
            <form>
                <Input
                    value={postTitle}
                    placeholder="Название поста "
                    onChange={onChangePostTitle}
                />
                <Input
                    value={postDescription}
                    placeholder="Описание поста "
                    onChange={onChangePostDescription}
                />
                <Button onClick={addPost}>Добавить пост</Button>
            </form>
            <PostList
                title={"Technology list"}
                posts={posts}
                onRemovePostHandler={onRemovePostHandler}
            />
        </div>
    );
}

export default App;
