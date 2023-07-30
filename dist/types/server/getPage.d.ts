import type { PageData } from '../types';
import { SearchParams } from '../types/searchParams';
export declare const getPage: (searchParams: SearchParams, getNumberOfElements: () => number | Promise<number>) => Promise<PageData>;
