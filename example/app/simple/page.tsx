import { withPagination, PageData } from 'next-server-pagination';
import { data } from '../data';
import PageSwitcher from './switcher';

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
