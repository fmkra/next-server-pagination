import List from './list';

export default function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    // note that if you remove searchParams, you get an error
    return <List searchParams={searchParams} />;
}
