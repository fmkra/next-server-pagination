export interface PageData {
    current: number;
    total: number;
    size: number;
    firstElement: number;
    lastElement: number;
}

export interface WithPaginationProps {
    page: PageData;
}
