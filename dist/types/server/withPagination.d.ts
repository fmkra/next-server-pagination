/// <reference types="react" />
import { PaginationSettings, WithPaginationProps } from '../types';
import { SearchParams } from '../types/searchParams';
export declare function withPagination<Props extends {
    searchParams: SearchParams;
}>(Component: React.FC<Props & WithPaginationProps>, getNumberOfElements: () => number | Promise<number>, settings?: Partial<PaginationSettings>): React.FC<Omit<Props, 'page'>>;
