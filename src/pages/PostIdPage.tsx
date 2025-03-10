import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { PostType } from "./Posts";

function PostIdPage() {
    const params = useParams<{ id: string }>();
    const [post, setPost] = useState<PostType | null>(null);

    const [fetchPostById, isLoading, error] = useFetching(
        useCallback(async (id: string) => {
            const response = await PostService.getById(id);
            setPost(response.data);
        }, [])
    );

    useEffect(() => {
        if (params.id) {
            fetchPostById(params.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div>Пост c ID {params.id}</div>
            {error && <h2>Произошла ошибка: {error}</h2>}
            {isLoading ? (
                <div className="app_loader-container">
                    <Loader />
                </div>
            ) : (
                <div>
                    {post?.title}
                    {post?.body}
                </div>
            )}
        </div>
    );
}

export default PostIdPage;
