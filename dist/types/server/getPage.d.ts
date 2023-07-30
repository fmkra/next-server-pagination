import type { PageData, PaginationSettings } from '../types';
import { SearchParams } from '../types/searchParams';
export declare const getPage: (searchParams: SearchParams, getNumberOfElements: () => number | Promise<number>, settings?: Partial<PaginationSettings>) => Promise<PageData>;
