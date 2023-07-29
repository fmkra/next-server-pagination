'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Context } from './context';

export const usePagination = () => {
    const context = useContext(Context);
    const path = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    if (context === null)
        throw new Error(
            'usePagination must be used within a component wrapped in withPagination function'
        );

    const set = (page: number) => {
        const newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
        newSearchParams.set('page', String(page));
        router.push(`${path}?${newSearchParams.toString()}`);
    };
    const next = () => set(context.current + 1);
    const previous = () => set(context.current - 1);
    const isFirst = context.current === 1;
    const isLast = context.current === context.total;

    return { ...context, set, next, previous, isFirst, isLast };
};
