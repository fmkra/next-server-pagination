/// <reference types="react" />
import type { Page } from '../types';
export declare const Context: import("react").Context<Page | null>;
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
    data: Page;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
