/// <reference types="react" />
import type { WithPaginationProps } from '../types/withPagination';
export declare function withPagination<Props extends {
    searchParams: Record<string, string>;
}>(Component: React.FC<Props & WithPaginationProps>, getNumberOfElements: () => number | Promise<number>): React.FC<Omit<Props, keyof WithPaginationProps>>;
