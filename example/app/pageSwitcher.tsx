'use client';

import { usePagination } from 'next-server-pagination';

export default function PageSwitcher() {
    const page = usePagination();

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={page.previous}
                disabled={page.isFirst}
                className="rounded-md py-1 px-2 border border-black"
            >
                &lt;
            </button>
            <p className="mx-4">
                {page.current} / {page.total}
            </p>
            <button
                onClick={page.next}
                disabled={page.isLast}
                className="rounded-md py-1 px-2 border border-black"
            >
                &gt;
            </button>
        </div>
    );
}
