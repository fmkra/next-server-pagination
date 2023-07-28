import { ContextProvider } from "../client/context";
import { getPage } from "./getPage"

export function withPagination(Component, getNumberOfElements) {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams, getNumberOfElements);

        const newProps = {
            ...props,
            page: {
                start: pageData.firstElement,
                end: pageData.lastElement
            }
        };

        return (
            <ContextProvider data={pageData}>
                <Component {...newProps} />
            </ContextProvider>
        )
    }
}