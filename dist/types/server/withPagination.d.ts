/// <reference types="react" />
import type { WithPaginationExtraProps } from '../types/withPagination';
export declare function withPagination<Props extends {
    searchParams: Record<string, string>;
}>(Component: React.FC<Props>, getNumberOfElements: () => number): React.FC<Props & WithPaginationExtraProps>;
