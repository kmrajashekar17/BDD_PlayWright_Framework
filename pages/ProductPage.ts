import { expect, Page } from '@playwright/test';

import { BasePage } from '../framework/base/BasePage';

export class ProductPage extends BasePage {

    //#region Locators
    private readonly addProductButton = this.page.locator('#addProduct');
    private readonly productNameInput = this.page.locator('#productName');
    private readonly saveButton = this.page.locator('#save');
    private readonly cancelButton = this.page.locator('#cancel');
    private readonly successMessage = this.page.locator('.success-message');
    private readonly productTable = this.page.locator('#productTable');
    private readonly productHeader =this.page.locator('h1');
    //#endregion

    //#region Constructor
    constructor(page: Page) {
        super(page);
    }
    //#endregion

    //#region Actions
    public async clickAddProduct(): Promise<void> {
        await this.operation.waitForVisible(this.addProductButton);
        await this.addProductButton.click();
    }

    public async enterProductName(productName: string): Promise<void> {
        await this.operation.waitForVisible(this.productNameInput);
        await this.productNameInput.fill(productName);
    }

    public async clickSave(): Promise<void> {
        await this.saveButton.click();
    }

    public async clickCancel(): Promise<void> {
        await this.cancelButton.click();
    }
    //#endregion

    //#region Business Methods
    public async addProduct(productName: string): Promise<void> {
        await this.clickAddProduct();
        await this.enterProductName(productName);
        await this.clickSave();
        await this.operation.waitForLoadState('networkidle');
    }

    public async cancelProduct(productName: string): Promise<void> {
        await this.clickAddProduct();
        await this.enterProductName(productName);
        await this.clickCancel();
    }
    //#endregion

    //#region Assertions
    public async verifyProductCreated(): Promise<void> {
        await expect(
            this.successMessage,
            'Product creation success message not displayed'
        ).toBeVisible();
    }

    public async verifyProductExists(productName: string): Promise<void> {
        await expect(
            this.productTable.getByText(productName),
            `Product '${productName}' not found`
        ).toBeVisible();
    }

    public async verifyProductPageDisplayed(): Promise<void> {
        await expect(this.productHeader,'Product page is not displayed').toBeVisible();
    }
    //#endregion
}