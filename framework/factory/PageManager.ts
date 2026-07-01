import { Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ProductPage } from '../../pages/ProductPage';

export class PageManager {

    //#region Variables
    private readonly page: Page;
    private loginPage?: LoginPage;
    private dashboardPage?: DashboardPage;
    private productPage?: ProductPage;
    //#endregion

    //#region Constructor
    constructor(page: Page) {
        this.page = page;
    }
    //#endregion

    //#region Page Objects
    public getLoginPage(): LoginPage {
        if (!this.loginPage)
        {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }

    public getDashboardPage(): DashboardPage {
        if (!this.dashboardPage)
        {
            this.dashboardPage = new DashboardPage(this.page);
        }
        return this.dashboardPage;
    }

    public getProductPage(): ProductPage {
        if (!this.productPage)
        {
            this.productPage = new ProductPage(this.page);
        }
        return this.productPage;
    }
    //#endregion
}