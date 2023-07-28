import { getPage, withPagination } from 'next-server-pagination';
import Client from './client';

const data = [
    'data 1',
    'data 2',
    'data 3',
    'data 4',
    'data 5',
    'data 6',
    'data 7',
    'data 8',
    'data 9',
    'data 10',
    'data 11',
    'data 12',
    'data 13',
    'data 14',
];

async function Page({ page }: any) {
    return (
        <>
            {JSON.stringify(page)}
            <Client />
        </>
    );
    // return <ContextProvider value="123"></ContextProvider>;
}

export default withPagination(Page);
