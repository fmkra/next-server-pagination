'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Context } from './context';
import { UsePagination } from '../types';

export const usePagination = (): UsePagination => {
    const context = useContext(Context);
    const path = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    if (context === null)
        throw new Error(
            'usePagination must be used within a component wrapped in withPagination function'
        );

    const setPage = (page: number) => {
        const newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
        newSearchParams.set('page', String(page));
        router.push(`${path}?${newSearchParams.toString()}`);
    };
    const next = () => setPage(context.current + 1);
    const previous = () => setPage(context.current - 1);

    const setSize = (size: number) => {
        const newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
        newSearchParams.set('size', String(size));
        router.push(`${path}?${newSearchParams.toString()}`);
    };

    const isFirst = context.current === 1;
    const isLast = context.current === context.total;

    return { ...context, setPage, next, previous, setSize, isFirst, isLast };
};
