import type { PageData, PaginationSettings } from '../types';
import { SearchParams } from '../types/searchParams';
import { defaultPaginationSettings } from './defaultSettings';

export const getPage = async (
    searchParams: SearchParams,
    getNumberOfElements: () => number | Promise<number>,
    settings?: Partial<PaginationSettings>
): Promise<PageData> => {
    settings = { ...defaultPaginationSettings, ...settings };

    const numberOfElements = await getNumberOfElements();
    const elementsPerPage = Number(searchParams['size'] ?? settings.defaultSize);
    const current = Number(searchParams['page'] ?? 1);
    const total = Math.ceil(numberOfElements / elementsPerPage);

    const firstElement = (Number(current) - 1) * elementsPerPage;
    const lastElement = firstElement + elementsPerPage - 1;

    return { current, total, firstElement, lastElement, size: elementsPerPage };
};
