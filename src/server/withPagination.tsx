import { ContextProvider } from '../client/context';
import { getPage } from './getPage';
import type { WithPaginationExtraProps } from '../types/withPagination';

export function withPagination<Props extends { searchParams: Record<string, string> }>(
    Component: React.FC<Props>,
    getNumberOfElements: () => number
): React.FC<Props & WithPaginationExtraProps> {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams, getNumberOfElements);

        const newProps = {
            ...props,
            page: {
                start: pageData.firstElement,
                end: pageData.lastElement,
            },
        };

        return (
            <ContextProvider data={pageData}>
                <Component {...newProps} />
            </ContextProvider>
        );
    };
}
