import { withPagination, WithPaginationPage } from 'next-server-pagination';
import Client from './client';

const data = new Array(100).fill(undefined).map((_, i) => `data ${i}`);

async function getData(start: number, end: number) {
    return data.slice(start, end + 1);
}

async function Page({ page }: { page: WithPaginationPage }) {
    const data = await getData(page.start, page.end);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mx-auto max-w-4xl p-2 my-4">
                {data.map((element, index) => (
                    <div className="rounded-lg border border-slate-400 p-4" key={index}>
                        {element}
                    </div>
                ))}
            </div>
            <Client />
        </>
    );
}

export default withPagination(Page, async () => data.length);
