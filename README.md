# next-server-pagination

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fmkra/next-server-pagination/blob/main/LICENSE)
[![npm version](https://img.shields.io/badge/npm-v1.0.0-brightgreen)](https://www.npmjs.com/package/next-server-pagination)

Add pagination to your next.js app with one function. The library works with React Server Components, so you can limit how much data you read from database and send to client. Page navigation is fully customizable.

## Installation

```bash
npm install next-server-pagination
```

## Usage

Just wrap your server component with `withPagination` and pass a function that returns number (or a Promise\<number\>) of elements as a second argument. The third, optional argument is a [settings object](#paginationsettings).

Then you can access page property inside your component and use it to limit data you read from database. Page property is of type [`PageData`](#pagedata).

**IMPORTANT!** This library uses `searchParams` to store page number and other data. If you use `withPagination` outside of `page.tsx`, you need to pass `searchParams` manually as a prop. (see [non page component example](example/app/non-page-component/page.tsx))

To add page navigation, create a client component and call `usePagination` hook. It returns functions like `next`, `previous` (see [`UsePagination`](#usepagination) type)

## Example

In this example `data` is a simple array, but you can for example use prisma with `skip` and `take` to limit data you read from database.

`page.tsx`

```tsx
import { withPagination, PageData } from 'next-server-pagination';
import { data } from './data';
import PageSwitcher from './pageSwitcher';

async function getDataLength() {
    return data.length;
}

async function getData(start: number, end: number) {
    return data.slice(start, end + 1);
}

async function Page({ page }: { page: PageData }) {
    // access page data ^ in your component
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
//    just add ^^^^
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

If you want to add add type to your component's props, you can either

-   type `page` props as `PageData`

```ts
import { PageData } from 'next-server-pagination';

function Page({ page }: { page: PageData }) {
    ...
}
export default withPagination(Page, getDataLength);
```

-   whole props object as `WithPaginationProps` (then you can also use `searchParams`)

```ts
import { WithPaginationProps } from 'next-server-pagination';

function Page({ page }: WithPaginationProps) {
    ...
}
export default withPagination(Page, getDataLength);
```

-   or declare a component inside `withPagination` and props will be infered automatically

```ts
import { withPagination } from 'next-server-pagination';

export default withPagination(
    function Page({ page }) {
        ...
    },
    getDataLength
);
```

### PageData

| Property       | Type     | Description                                                                            |
| -------------- | -------- | -------------------------------------------------------------------------------------- |
| `current`      | `number` | Index of the page that user is currently on. It is an integer between `1` and `total`. |
| `total`        | `number` | Total number of pages.                                                                 |
| `size`         | `number` | Number of elements per page.                                                           |
| `firstElement` | `number` | Index of the first element on the page.                                                |
| `lastElement`  | `number` | Index of the last element on the page.                                                 |

### UsePagination

Includes all properties from `PageData` and:

| Property   | Type                     | Description                            |
| ---------- | ------------------------ | -------------------------------------- |
| `isFirst`  | `boolean`                | Whether the user is on the first page. |
| `isLast`   | `boolean`                | Whether the user is on the last page.  |
| `next`     | `() => void`             | Switches to the next page.             |
| `previous` | `() => void`             | Switches to the previous page.         |
| `setPage`  | `(page: number) => void` | Switches to the specified page.        |
| `setSize`  | `(size: number) => void` | Sets the number of elements per page.  |

### PaginationSettings

| Property      | Type     | Default | Description                                                                              |
| ------------- | -------- | ------- | ---------------------------------------------------------------------------------------- |
| `defaultSize` | `number` | `20`    | Default number of elements per page. It is used if size is not provided in search params |
