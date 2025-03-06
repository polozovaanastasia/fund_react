import axios from "axios";
import { useEffect, useState } from "react";
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
    const [posts, setPosts] = useState<Array<PostType>>([]);

    const [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        async function fetchPosts() {
            await axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    setPosts(response.data);
                })
                .catch((error) => {
                    new Error(error);
                });
        }
        fetchPosts();
    }, []);

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
        setIsModalOpen(false);
    }

    return (
        <div className="app">
            <Button onClick={() => setIsModalOpen(true)}>Добавить пост</Button>
            <br />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                title={"Technology list"}
                posts={sortedAndSearchedPosts}
                onRemovePostHandler={onRemovePostHandler}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <>
                    <h2>Новый пост:</h2>
                    <AddPostForm onAddPostHandler={onAddPostHandler} />
                </>
            </Modal>
        </div>
    );
}

export default App;
