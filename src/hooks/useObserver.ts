import { useEffect, useRef } from "react";

export const useObserver = (
    ref: React.RefObject<HTMLDivElement | null>,
    isLoading: boolean,
    canLoad: boolean,
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading || !canLoad || !ref.current) return;
        if (observer.current) observer.current.disconnect();

        const cb = (entries: Array<IntersectionObserverEntry>) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);

        if (ref.current) {
            observer.current.observe(ref.current);
        }
    }, [isLoading]);
};
