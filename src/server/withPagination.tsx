import { ContextProvider } from '../client/context';
import { getPage } from './getPage';
import { PaginationSettings, WithPaginationProps } from '../types';
import { SearchParams } from '../types/searchParams';

export function withPagination<Props extends { searchParams: SearchParams }>(
    Component: React.FC<Props & WithPaginationProps>,
    getNumberOfElements: () => number | Promise<number>,
    settings?: Partial<PaginationSettings>
): React.FC<Omit<Props, 'page'>> {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams, getNumberOfElements, settings);

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
