import { Locator, Page } from '@playwright/test';
import { WaitState } from '../enums/WaitState';

export class Operations {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private getLocator(locator: Locator | string):Locator{
        return typeof locator === 'string' ? this.page.locator(locator) : locator;
    }

    // ==========================
    // Locator Waits
    // ==========================

    public async waitForVisible(locator: Locator | string, timeout = 30000):Promise<void>{
        await this.getLocator(locator).waitFor({state: WaitState.Visible,timeout});
    }

    public async waitForHidden(locator: Locator | string, timeout = 30000):Promise<void>{
        await this.getLocator(locator).waitFor({state: WaitState.Hidden,timeout});
    }

    public async waitForAttached(locator: Locator | string, timeout = 30000):Promise<void>{
        await this.getLocator(locator).waitFor({state: WaitState.Attached,timeout});
    }

    public async waitForDetached(locator: Locator | string, timeout = 30000):Promise<void>{
        await this.getLocator(locator).waitFor({state: WaitState.Detached,timeout});
    }

    // ==========================
    // Page Waits
    // ==========================

    public async waitForURL(url: string | RegExp, timeout = 30000):Promise<void>{
        await this.page.waitForURL(url, { timeout });
    }

    public async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load', timeout = 30000):Promise<void>{
        await this.page.waitForLoadState(state, { timeout });
    }

    // ==========================
    // Selector Wait
    // ==========================

    public async waitForSelector(selector: string, state: WaitState = WaitState.Visible, timeout = 30000):Promise<void>{
        await this.page.waitForSelector(selector, {state,timeout});
    }

    // ==========================
    // Function Wait
    // ==========================

    public async waitForFunction(fn: () => unknown, timeout = 30000):Promise<void>{
        await this.page.waitForFunction(fn, {timeout});
    }

    // ==========================
    // Network Waits
    // ==========================

    public async waitForRequest(url: string | RegExp, timeout = 30000):Promise<void>{
        await this.page.waitForRequest(url, { timeout });
    }

    public async waitForResponse(url: string | RegExp, timeout = 30000):Promise<void>{
        await this.page.waitForResponse(url, { timeout });
    }

    // ==========================
    // Explicit Wait
    // ==========================

    public async waitForTimeout(milliseconds: number):Promise<void>{
        await this.page.waitForTimeout(milliseconds);
    }
}
