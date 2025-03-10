export const getPageCount = (totalCount: number, limit: number) =>
    Math.ceil(totalCount / limit);

export const getPagesArray = (pagesCount: number) =>
    Array.from({ length: pagesCount }, (_, i) => i + 1);
