import { useState } from "react";
import "./App.css";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import PostList from "./components/PostsList/PostList";
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";
import { usePosts } from "./hooks/usePosts";

export type PostType = {
    id: number;
    title: string;
    body: string;
};

export type OptionType = {
    value: OptionValueType;
    label: string;
};

export type OptionValueType = keyof Omit<PostType, "id"> | "";

export type FilterType = {
    sort: OptionValueType;
    query: string;
};

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

    const [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
        setIsModalOpen(false);
    }

    function onModalOpen() {
        setIsModalOpen(true);
    }

    function onModalClose() {
        setIsModalOpen(false);
    }
    return (
        <div className="app">
            <Button onClick={onModalOpen}>Добавить пост</Button>
            <br />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                title={"Technology list"}
                posts={sortedAndSearchedPosts}
                onRemovePostHandler={onRemovePostHandler}
            />
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <>
                    <h2>Новый пост:</h2>
                    <AddPostForm onAddPostHandler={onAddPostHandler} />
                </>
            </Modal>
        </div>
    );
}

export default App;
