import { useMemo, useState } from "react";
import "./App.css";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import ClassCounter from "./components/Counter/classCounter";
import Counter from "./components/Counter/Counter";
import PostFilter from "./components/PostFilter/PostFilter";
import PostList from "./components/PostsList/PostList";

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

    const sortedPosts: Array<PostType> = useMemo(() => {
        const sortKey = filter.sort;
        if (sortKey) {
            return [...posts].sort((a, b) =>
                a[sortKey].localeCompare(b[sortKey])
            );
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts: Array<PostType> = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title
                .toLowerCase()
                .includes(filter.query.toLowerCase());
        });
    }, [filter.query, sortedPosts]);

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
    }
    return (
        <div className="app">
            <Counter />
            <ClassCounter />
            <AddPostForm onAddPostHandler={onAddPostHandler} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {sortedAndSearchedPosts.length ? (
                <PostList
                    title={"Technology list"}
                    posts={sortedAndSearchedPosts}
                    onRemovePostHandler={onRemovePostHandler}
                />
            ) : (
                <h2 className="post-list_empty">Посты не найдены</h2>
            )}
        </div>
    );
}

export default App;
