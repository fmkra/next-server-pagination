/// <reference types="react" />
import type { PageData } from '../types';
export declare const Context: import("react").Context<PageData | null>;
export declare function ContextProvider({ data, children, }: {
    data: PageData;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
