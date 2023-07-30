/// <reference types="react" />
import { WithPaginationProps } from '../types';
import { SearchParams } from '../types/searchParams';
export declare function withPagination<Props extends {
    searchParams: SearchParams;
}>(Component: React.FC<Props & WithPaginationProps>, getNumberOfElements: () => number | Promise<number>): React.FC<Omit<Props, 'page'>>;
