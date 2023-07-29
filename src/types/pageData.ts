export interface PageData {
    current: number;
    total: number;
    firstElement: number;
    lastElement: number;
    elementsPerPage: number;
}

export interface WithPaginationProps {
    page: PageData;
}
