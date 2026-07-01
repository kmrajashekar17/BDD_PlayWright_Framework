import { expect, Page } from '@playwright/test';
import { BasePage } from '../framework/base/BasePage';
import { ENV } from '../config/env';

export class LoginPage extends BasePage {

    //#region Locators
    private readonly userNameInput =this.page.locator("//input[@name='txtUserName']");
    private readonly passwordInput =this.page.locator("input[name='txtPassword']");
    private readonly loginButton =this.page.locator("input[type='Submit']");
    private readonly logoutLink =this.page.getByRole('link',{ name: 'Logout' });   
    //#endregion

    //#region Constructor
    constructor(page: Page) {
        super(page);
    }
    //#endregion

    //#region Navigation
    public async openApplication(): Promise<void> {
        await this.page.goto(ENV.baseUrl);
        await this.operation.waitForLoadState('networkidle');
    }
    //#endregion

    //#region Actions
    public async enterUserName(userName: string): Promise<void> {
        await this.operation.waitForVisible(this.userNameInput);
        await this.userNameInput.clear();
        await this.userNameInput.fill(userName);
    }

    public async enterPassword(password: string): Promise<void> {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    public async clickLogin(): Promise<void> {
        expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
    }

    public async clickLogout(): Promise<void> {
        expect(this.logoutLink).toBeEnabled();
        await this.logoutLink
            .click();
    }

    //#endregion

    //#region Business Methods
    public async login(userName: string, password: string): Promise<void> {
        this.logger.info(`Login started`);
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLogin();
        this.logger.success(`Login completed`);
    }

    public async loginAsAdmin(): Promise<void> {
        await this.login(ENV.username,ENV.password);
    }
    //#endregion

    //#region Assertions
    public async verifyLoginSuccessful(): Promise<void> {
        await expect(this.logoutLink,'Logout link was not found after login').toHaveCount(1);
        await expect(this.logoutLink,'Logout link is not visible after login').toBeVisible();
    }

    public async verifyLoginPageDisplayed(): Promise<void> {

        await expect(
            this.loginButton,
            'Login page not displayed'
        ).toBeVisible();
    }
    //#endregion

}