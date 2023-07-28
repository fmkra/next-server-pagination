export const getPage = async (searchParams, numberOfElements) => {
    const elementsPerPage = Number(searchParams['per_page'] ?? 10);
    const currentPage = Number(searchParams['page'] ?? 1);
    const lastPage = Math.ceil(numberOfElements / elementsPerPage);

    const firstElement = (Number(currentPage) - 1) * elementsPerPage;
    const lastElement = firstElement + elementsPerPage - 1;

    return { currentPage, lastPage, firstElement, lastElement, elementsPerPage };
};
