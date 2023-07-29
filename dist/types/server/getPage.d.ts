import type { PageData } from '../types';
export declare const getPage: (searchParams: Record<string, string>, getNumberOfElements: () => number | Promise<number>) => Promise<PageData>;
