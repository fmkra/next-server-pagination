'use client';

import { createContext } from 'react';
import type { PageData } from '../types';

export const Context = createContext<PageData | null>(null);

export function ContextProvider({
    data,
    children,
}: {
    data: PageData;
    children: React.ReactNode;
}) {
    return <Context.Provider value={data}>{children}</Context.Provider>;
}
