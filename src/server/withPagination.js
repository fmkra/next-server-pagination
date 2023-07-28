import { ContextProvider } from "../client/context";
import { getPage } from "./getPage"

export function withPagination(Component) {
    return async function ComponentWithPagination(props) {
        const pageData = await getPage(props.searchParams);

        const newProps = {
            ...props,
            page: {
                start: pageData.firstElement,
                end: pageData.lastElement
            }
        };

        return (
            <ContextProvider data={pageData}>
                <Component {...props} page={newProps} />
            </ContextProvider>
        )
    }
}