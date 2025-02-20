import { useMemo, useState } from "react";
import "./App.css";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import ClassCounter from "./components/Counter/classCounter";
import Counter from "./components/Counter/Counter";
import PostList from "./components/PostsList/PostList";
import Input from "./components/UI/Input/Input";
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

    const [selectedSort, setSelectedSort] = useState<
        OptionValueType | undefined
    >(undefined);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const sortedPosts: Array<PostType> = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort])
            );
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts: Array<PostType> = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [searchQuery, sortedPosts]);

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
    }

    function onChangeSortOptionHandler(selectedOption: OptionValueType) {
        setSelectedSort(selectedOption);
    }

    function onSearchPostHandler(query: string) {
        setSearchQuery(query);
    }
    return (
        <div className="app">
            <Counter />
            <ClassCounter />
            <AddPostForm onAddPostHandler={onAddPostHandler} />
            <Input
                value={searchQuery}
                placeholder="Поиск..."
                onChange={onSearchPostHandler}
            />
            <Select
                value={selectedSort}
                options={[
                    { value: "title", label: "По названию" },
                    { value: "body", label: "По описанию" },
                ]}
                defaultValue="Сортировать"
                onChangeHandler={onChangeSortOptionHandler}
            />
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
