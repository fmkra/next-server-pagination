export declare const usePagination: () => {
    set: (page: number) => void;
    next: () => void;
    previous: () => void;
    isFirst: boolean;
    isLast: boolean;
    current: number;
    total: number;
    firstElement: number;
    lastElement: number;
    elementsPerPage: number;
};
