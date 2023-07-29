import type { Page } from '../types';
export declare const getPage: (searchParams: Record<string, string>, getNumberOfElements: () => number) => Promise<Page>;
