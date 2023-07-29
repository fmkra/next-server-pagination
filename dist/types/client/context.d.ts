/// <reference types="react" />
import type { PageData } from '../types';
export declare const Context: import("react").Context<PageData | null>;
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
export declare function ContextProvider({ data, children, }: {
    data: PageData;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
