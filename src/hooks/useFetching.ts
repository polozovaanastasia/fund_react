import { useCallback, useState } from "react";
import { ensureError } from "../utils/ensureError";

export const useFetching = <Args extends unknown[]>(
    callback: (...args: Args) => Promise<void>
): [(...args: Args) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = useCallback(
        async (...args: Args) => {
            try {
                setIsLoading(true);
                await callback(...args);
            } catch (e) {
                const message = ensureError(e).message;
                setError(message);
            } finally {
                setIsLoading(false);
            }
        },
        [callback]
    );

    return [fetching, isLoading, error];
};
