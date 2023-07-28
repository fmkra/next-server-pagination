'use client';

import React, { createContext, useContext } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation' 
// import type { ReactNode } from 'react'

// export type ContextData = string;

export const Context = createContext(null);

export const usePagination = () => {
    const context = useContext(Context);
    const path = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    if(context === null) throw new Error('usePagination must be used within a component wrapped in withPagination function');

    const set = (page) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', page);
        router.push(`${path}?${newSearchParams.toString()}`);
    };
    const next = () => set(context.current + 1);
    const previous = () => set(context.current - 1);
    const isFirst = context.current === 1;
    const isLast = context.current === context.total;

    return { ...context, set, next, previous, isFirst, isLast };
}

export function ContextProvider({ data, children }) {
    return <Context.Provider value={data}>{children}</Context.Provider>;
}
