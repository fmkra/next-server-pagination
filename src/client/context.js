'use client';

import React, { createContext, useContext } from 'react';
// import type { ReactNode } from 'react'

// export type ContextData = string;

export const Context = createContext(null);

export const usePagination = () => useContext(Context);

export function ContextProvider({ data, children }) {
    return <Context.Provider value={data}>{children}</Context.Provider>;
}
