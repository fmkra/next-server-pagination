import { PageData } from './pageData';

export interface UsePagination extends PageData {
    setPage: (page: number) => void;
    next: () => void;
    previous: () => void;
    setSize: (size: number) => void;
    isFirst: boolean;
    isLast: boolean;
}
