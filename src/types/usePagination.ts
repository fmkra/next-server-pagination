import { PageData } from './pageData';

export interface UsePagination extends PageData {
    set: (page: number) => void;
    next: () => void;
    previous: () => void;
    isFirst: boolean;
    isLast: boolean;
}
