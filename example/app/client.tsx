'use client';

import { usePagination } from 'next-server-pagination';

export default function Client() {
    const page = usePagination();

    return <button onClick={() => console.log(page)}>Click</button>;
}
