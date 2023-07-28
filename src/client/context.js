'use client';

import React, { createContext, useContext } from 'react';
// import type { ReactNode } from 'react'

// export type ContextData = string;

export const Context = createContext(null);

export const usePagination = () => {
    const context = useContext(Context);
    if(context === null) throw new Error('usePagination must be used within a component wrapped in withPagination function');
    return context;
}

export function ContextProvider({ data, children }) {
    return <Context.Provider value={data}>{children}</Context.Provider>;
}
