type Gap = {
    before: boolean;
    paginationGroup: number[];
    after: boolean;
};
type UsePaginationProps = {
    contentPerPage: number;
    count: number;
};
declare const usePagination: ({ contentPerPage, count }: UsePaginationProps) => {
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (num: number) => void;
    firstContentIndex: number;
    lastContentIndex: number;
    page: number;
    gaps: Gap;
};
export default usePagination;
