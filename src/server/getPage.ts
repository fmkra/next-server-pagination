import type { PageData } from '../types';
import { SearchParams } from '../types/searchParams';

export const getPage = async (
    searchParams: SearchParams,
    getNumberOfElements: () => number | Promise<number>
): Promise<PageData> => {
    const numberOfElements = await getNumberOfElements();
    const elementsPerPage = Number(searchParams['size'] ?? 10);
    const current = Number(searchParams['page'] ?? 1);
    const total = Math.ceil(numberOfElements / elementsPerPage);

    const firstElement = (Number(current) - 1) * elementsPerPage;
    const lastElement = firstElement + elementsPerPage - 1;

    return { current, total, firstElement, lastElement, size: elementsPerPage };
};
