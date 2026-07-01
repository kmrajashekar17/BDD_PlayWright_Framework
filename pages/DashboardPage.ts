import { expect, Page } from '@playwright/test';

import { BasePage } from '../framework/base/BasePage';

export class DashboardPage extends BasePage {

    //#region Locators
    private readonly dashboardHeader = this.page.locator('#dashboard');
    private readonly productsMenu = this.page.locator('#productsMenu');
    private readonly logoutButton = this.page.locator('#logout');
    //#endregion

    //#region Constructor
    constructor(page: Page) {
        super(page);
    }
    //#endregion

    //#region Actions
    public async clickProductsMenu(): Promise<void> {
        await this.operation.waitForVisible(this.productsMenu);
        await this.productsMenu.click();
    }

    public async clickLogout(): Promise<void> {
        await this.operation.waitForVisible(this.logoutButton);
        await this.logoutButton.click();
    }
    //#endregion

    //#region Business Methods
    public async openProducts(): Promise<void> {
        await this.clickProductsMenu();
        await this.operation.waitForLoadState('networkidle');
    }

    public async logout(): Promise<void> {
        await this.clickLogout();
        await this.operation.waitForLoadState('networkidle');
    }
    //#endregion

    //#region Assertions
    public async verifyDashboardDisplayed(): Promise<void> {
        await expect(
            this.dashboardHeader,
            'Dashboard page is not displayed'
        ).toBeVisible();
    }
    //#endregion
}