'use client';

import { usePagination } from 'next-server-pagination';

export default function PageSwitcher() {
    const page = usePagination();

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={page.previous}
                disabled={page.isFirst}
                className="rounded-md p-1 border border-black"
            >
                Prev
            </button>
            <p className="mx-4">
                {page.current} / {page.total}
            </p>
            <button
                onClick={page.next}
                disabled={page.isLast}
                className="rounded-md p-1 border border-black"
            >
                Next
            </button>
        </div>
    );
}
