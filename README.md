Add pagination to your next.js app with one function. The library works with React Server Components, so you can limit data send to the client. Page navigation is fully customizable.

## Installation

```bash
npm install next-server-pagination
```

## Usage

Just wrap your server component with `withPagination` and pass a function that returns number of elements as a second argument (or a Promise\<number\>).

Then you can access page property inside your component and use it to limit data send to the client. Page propery is of type [`PageData`](#pagedata).

**IMPORTANT!** This library uses `searchParams` to store page number and other data. If you use `withPagination` outside of `page.tsx`, you need to pass `searchParams` manually as a prop. (see TODO: add example)

To add page navigation, create a client component and call `usePagination` hook. It returns functions like `next`, `previous` (see [`UsePagination`](#usepagination) type)

## Example

`page.tsx`

```tsx
import { withPagination } from 'next-server-pagination';
import { data } from './data';

async function getDataLength() {
    return data.length;
}

async function getData(start: number, end: number) {
    return data.slice(start, end + 1);
}

async function Page({ page }: { page: PageData }) {
    const data = await getData(page.firstElement, page.lastElement);

    return (
        <>
            <div className="grid grid-cols-4 gap-4 mx-auto max-w-4xl p-2 my-4">
                {data.map((element, index) => (
                    <div
                        className="rounded-lg border border-slate-400 p-4 text-center"
                        key={index}
                    >
                        {element}
                    </div>
                ))}
            </div>
            <PageSwitcher />
        </>
    );
}

export default withPagination(Page, getDataLength);
```

`pageSwitcher.tsx`

```tsx
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
```

## Types

### PageData

| Property          | Type     | Description                                                                            |
| ----------------- | -------- | -------------------------------------------------------------------------------------- |
| `current`         | `number` | Index of the page that user is currently on. It is an integer between `1` and `total`. |
| `total`           | `number` | Total number of pages.                                                                 |
| `firstElement`    | `number` | Index of the first element on the page.                                                |
| `lastElement`     | `number` | Index of the last element on the page.                                                 |
| `elementsPerPage` | `number` | Number of elements on the page.                                                        |

### UsePagination

Includes all properties from `PageData` and:

| Property   | Type                     | Description                            |
| ---------- | ------------------------ | -------------------------------------- |
| `isFirst`  | `boolean`                | Whether the user is on the first page. |
| `isLast`   | `boolean`                | Whether the user is on the last page.  |
| `next`     | `() => void`             | Switches to the next page.             |
| `previous` | `() => void`             | Switches to the previous page.         |
| `set`      | `(page: number) => void` | Switches to the specified page.        |
