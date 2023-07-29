import { ContextProvider } from '../client/context';
import { getPage } from './getPage';
import type { WithPaginationProps } from '../types/withPagination';

export function withPagination<Props extends { searchParams: Record<string, string> }>(
    Component: React.FC<Props & WithPaginationProps>,
    getNumberOfElements: () => number | Promise<number>
): React.FC<Omit<Props, keyof WithPaginationProps>> {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams, getNumberOfElements);

        const newProps = {
            ...props,
            page: {
                start: pageData.firstElement,
                end: pageData.lastElement,
            },
        } as Props & WithPaginationProps;

        return (
            <ContextProvider data={pageData}>
                <Component {...newProps} />
            </ContextProvider>
        );
    };
}
