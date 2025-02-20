import { useState } from "react";
import "./App.css";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import ClassCounter from "./components/Counter/classCounter";
import Counter from "./components/Counter/Counter";
import PostList from "./components/PostsList/PostList";
import Select from "./components/UI/Select/Select";

export type PostType = {
    id: number;
    title: string;
    body: string;
};

export type OptionType = {
    value: OptionValueType;
    label: string;
};

export type OptionValueType = keyof Omit<PostType, "id">;

function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {
            id: 1,
            title: "1. JavaScript",
            body: "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
        },
        {
            id: 2,
            title: "2. TypeScript",
            body: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        },
        {
            id: 3,
            title: "3. React",
            body: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        },
    ]);

    const [selectedSort, setSelectedSort] = useState<string>("");

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
    }

    function onChangeSortOptionHandler(selectedOption: OptionValueType) {
        setSelectedSort(selectedOption);
        setPosts((lastPosts) =>
            [...lastPosts].sort((a, b) =>
                a[selectedOption].localeCompare(b[selectedOption])
            )
        );
    }
    return (
        <div className="app">
            <Counter />
            <ClassCounter />
            <AddPostForm onAddPostHandler={onAddPostHandler} />
            <Select
                value={selectedSort}
                options={[
                    { value: "title", label: "По названию" },
                    { value: "body", label: "По описанию" },
                ]}
                defaultValue="Сортировать"
                onChangeHandler={onChangeSortOptionHandler}
            />
            {posts.length ? (
                <PostList
                    title={"Technology list"}
                    posts={posts}
                    onRemovePostHandler={onRemovePostHandler}
                />
            ) : (
                <h2 className="post-list_empty">Посты не найдены</h2>
            )}
        </div>
    );
}

export default App;
