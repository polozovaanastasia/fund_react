import { useCallback, useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import AddPostForm from "../components/AddPostForm/AddPostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import PostList from "../components/PostsList/PostList";
import Button from "../components/UI/Button/Button";
import Loader from "../components/UI/Loader/Loader";
import Modal from "../components/UI/Modal/Modal";
import Pagination from "../components/UI/Pagination/Pagination";
import Select from "../components/UI/Select/Select";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

export type PostType = {
    id: number;
    title: string;
    body: string;
};

export type OptionType = {
    value: OptionValueType;
    label: string;
};

export type OptionValueType = keyof Omit<PostType, "id"> | string | number;

export type FilterType = {
    sort: OptionValueType;
    query: string;
};

function Posts() {
    const [posts, setPosts] = useState<Array<PostType>>([]);

    const [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [totalPages, setTotalPages] = useState<number>(0);

    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const lastElement = useRef<HTMLDivElement>(null);

    const [fetchPosts, isLoading, error] = useFetching(
        useCallback(async (limit: number, page: number) => {
            const response = await PostService.getAll(limit, page);
            const totalPosts = response.headers["x-total-count"];

            setPosts((lastPosts) => [...lastPosts, ...response.data]);
            setTotalPages(getPageCount(totalPosts, limit));
        }, [])
    );

    useObserver(lastElement, isLoading, page < totalPages, () =>
        setPage((lastPage) => lastPage + 1)
    );

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    function onRemovePostHandler(id: number) {
        setPosts(posts.filter((post: PostType) => post.id != id));
    }

    function onAddPostHandler(newPost: PostType) {
        setPosts((lastPosts) => [...lastPosts, newPost]);
        setIsModalOpen(false);
    }

    function changePage(page: number) {
        setPage(page);
    }
    return (
        <div className="posts">
            <Button onClick={() => setIsModalOpen(true)}>Добавить пост</Button>
            <br />
            <PostFilter filter={filter} setFilter={setFilter} />
            <Select
                value={limit}
                options={[
                    { value: -1, label: "Показать все" },
                    { value: 20, label: "20" },
                    { value: 10, label: "10" },
                    { value: 5, label: "5" },
                ]}
                defaultValue="Кол-во постов на странице"
                onChange={(value) => {
                    setLimit(Number(value));
                    setPosts([]);
                    setPage(1);
                }}
            />
            {error && <h2>Произошла ошибка: {error}</h2>}
            {isLoading ? (
                <div className="app_loader-container">
                    <Loader />
                </div>
            ) : (
                <>
                    <PostList
                        title={"Posts"}
                        posts={sortedAndSearchedPosts}
                        onRemovePostHandler={onRemovePostHandler}
                    />
                    <div ref={lastElement}></div>
                </>
            )}
            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}
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

export default Posts;
