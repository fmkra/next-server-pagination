import type { PageData } from '../types';

export const getPage = async (
    searchParams: Record<string, string>,
    getNumberOfElements: () => number | Promise<number>
): Promise<PageData> => {
    const numberOfElements = await getNumberOfElements();
    const elementsPerPage = Number(searchParams['per_page'] ?? 10);
    const current = Number(searchParams['page'] ?? 1);
    const total = Math.ceil(numberOfElements / elementsPerPage);

    const firstElement = (Number(current) - 1) * elementsPerPage;
    const lastElement = firstElement + elementsPerPage - 1;

    return { current, total, firstElement, lastElement, elementsPerPage };
};
