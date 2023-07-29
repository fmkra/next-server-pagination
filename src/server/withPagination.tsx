import { ContextProvider } from '../client/context';
import { getPage } from './getPage';
import { WithPaginationProps } from '../types';

export function withPagination<Props extends { searchParams: Record<string, string> }>(
    Component: React.FC<Props & WithPaginationProps>,
    getNumberOfElements: () => number | Promise<number>
): React.FC<Omit<Props, keyof WithPaginationProps>> {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams, getNumberOfElements);

        const newProps = {
            ...props,
            page: pageData,
        } as Props & WithPaginationProps;

        return (
            <ContextProvider data={pageData}>
                <Component {...newProps} />
            </ContextProvider>
        );
    };
}
