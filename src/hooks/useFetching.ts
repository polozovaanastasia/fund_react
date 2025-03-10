import { useCallback, useState } from "react";
import { ensureError } from "../utils/ensureError";

type FetchCallbackType = (limit: number, page: number) => Promise<void>;

export const useFetching = (
    callback: FetchCallbackType
): [FetchCallbackType, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetching = useCallback(
        async (limit: number, page: number) => {
            try {
                // setIsLoading(true);
                await callback(limit, page);
            } catch (error) {
                const message = ensureError(error).message;
                setError(message); // читать: https://medium.com/with-orus/the-5-commandments-of-clean-error-handling-in-typescript-93a9cbdf1af5
            } finally {
                setIsLoading(false);
            }
        },
        [callback]
    );

    return [fetching, isLoading, error];
};
