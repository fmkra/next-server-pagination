'use client';

import { usePagination } from 'next-server-pagination';

export default function Client() {
    const page = usePagination();

    return (
        <div>
            <p>
                {page.current} / {page.total}
            </p>
            <button onClick={page.previous} disabled={page.isFirst}>
                Prev
            </button>
            <button onClick={page.next} disabled={page.isLast}>
                Next
            </button>
        </div>
    );
}
