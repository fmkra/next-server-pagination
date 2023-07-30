/// <reference types="react" />
import { WithPaginationProps } from '../types';
import { SearchParams } from './searchParams';
export declare function withPagination<Props extends {
    searchParams: SearchParams;
}>(Component: React.FC<Props & WithPaginationProps>, getNumberOfElements: () => number | Promise<number>): React.FC<Omit<Props, keyof WithPaginationProps>>;
