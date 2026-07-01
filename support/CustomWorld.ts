import {
    IWorld,
    IWorldOptions,
    setWorldConstructor,
    World
} from '@cucumber/cucumber';

import {
    BrowserContext,
    Page
} from '@playwright/test';

import { PageManager } from '../framework/factory/PageManager';

export class CustomWorld
    extends World
    implements IWorld {

    public context!: BrowserContext;

    public page!: Page;

    public pages!: PageManager;

    constructor(options: IWorldOptions) {

        super(options);
    }
}

setWorldConstructor(CustomWorld);