import { Page } from '@playwright/test';

export class PageManager {

    private readonly cache = new Map<string, unknown>();

    constructor(private readonly page: Page) {}

    public get<T>(pageClass: new (page: Page) => T): T {

        const key = pageClass.name;

        if (!this.cache.has(key)) {
            this.cache.set(key, new pageClass(this.page));
        }

        return this.cache.get(key) as T;
    }
}