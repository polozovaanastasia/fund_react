import { useMemo } from "react";
import { OptionValueType, PostType } from "../App";

export const useSortedPosts = (
    posts: Array<PostType>,
    sort: OptionValueType
) => {
    const sortedPosts: Array<PostType> = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};

export const usePosts = (
    posts: Array<PostType>,
    sort: OptionValueType,
    query: string
) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts: Array<PostType> = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(query.toLowerCase());
        });
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
};
