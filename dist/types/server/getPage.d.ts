import type { PageData } from '../types';
import { SearchParams } from './searchParams';
export declare const getPage: (searchParams: SearchParams, getNumberOfElements: () => number | Promise<number>) => Promise<PageData>;
