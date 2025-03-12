import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import CommentsList from "../components/CommentsList/CommentsList";
import Post from "../components/Post/Post";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { PostType } from "./Posts";

type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
export type CommentsType = Array<CommentType>;

function PostIdPage() {
    const params = useParams<{ id: string }>();
    const [post, setPost] = useState<PostType | null>(null);
    const [comments, setComments] = useState<CommentsType>([]);

    const [fetchPostById, isLoading, error] = useFetching(
        useCallback(async (id: string) => {
            const response = await PostService.getById(id);
            setPost(response.data);
        }, [])
    );

    const [fetchComments, isCommentsLoading, CommentsError] = useFetching(
        useCallback(async (id: string) => {
            const response = await PostService.getCommentsByPostId(id);
            setComments(response.data);
        }, [])
    );
    console.log(CommentsError);
    useEffect(() => {
        if (params.id) {
            fetchPostById(params.id);
            fetchComments(params.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div>Пост c ID {params.id}</div>
            {error && <h2>Произошла ошибка: {error}</h2>}

            {isLoading && (
                <div className="app_loader-container">
                    <Loader />
                </div>
            )}

            {post && !isLoading && <Post title={post.title} body={post.body} />}

            {isCommentsLoading ? <></> : <CommentsList comments={comments} />}
        </div>
    );
}

export default PostIdPage;
