import { expect, Page } from '@playwright/test';
import { ENV } from '../config/env';
import { BasePage } from '../framework/base/BasePage';

export class LoginPage extends BasePage {

    //#region [Locators]
    private readonly usernameInput = this.page.getByPlaceholder('Username');
    private readonly passwordInput = this.page.getByPlaceholder('Password');
    private readonly loginButton = this.page.getByRole('button', { name: 'Login' });
    private readonly invalidCredentialsMessage = this.page.locator('div.oxd-alert-content--error p.oxd-text');
    //#endregion

    //#region [Constructor]
    constructor(page: Page){
        super(page);
    }
    //#endregion

    //#region [Navigation Methods]
    public async openApplication():Promise<void>{
        this.logger.info('Opening application');
        await this.page.goto(ENV.baseUrl);
        await expect(this.usernameInput,'Username textbox was not displayed').toBeVisible();
        this.logger.success('Application opened');
    }
    //#endregion

    //#region [Action Methods]
    public async enterUserName(userName: string):Promise<void>{
        this.logger.info(`Entering username : ${userName}`);
        await expect(this.usernameInput,'Username textbox was not visible').toBeVisible();
        await this.usernameInput.fill(userName);
    }

    public async enterPassword(password: string):Promise<void>{
        this.logger.info('Entering password');
        await expect(this.passwordInput,'Password textbox was not visible').toBeVisible();
        await this.passwordInput.fill(password);
    }

    public async clickLogin():Promise<void>{
        this.logger.info('Clicking login button');
        await expect(this.loginButton,'Login button was not visible').toBeVisible();
        await expect(this.loginButton,'Login button was not enabled').toBeEnabled();
        await this.loginButton.click();
        await this.operation.waitForLoadState('load');
        this.logger.success('Login button clicked');
    }

    public async verifyErrorMessageDisplayed(errorMessage: string):Promise<void>{
        await this.operation.waitForLoadState('load');
        await expect(this.invalidCredentialsMessage, 'Invalid credentials message was not displayed').toBeVisible();
        await expect(this.invalidCredentialsMessage, 'Invalid credentials message text is incorrect').toHaveText(errorMessage);
        await this.page.waitForTimeout(3000);
    }
    //#endregion

    //#region [Business Methods]
    public async login(userName: string,password: string):Promise<void>{
        this.logger.info('Login started');
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLogin();
        this.logger.success('Login completed');
    }

    public async loginAsAdmin():Promise<void>{
        await this.login(ENV.username,ENV.password);
    }
    //#endregion

    //#region [Verification Methods]
    public async verifyLoginPageDisplayed():Promise<void>{
        this.logger.info('Verifying login page');
        await expect(this.usernameInput,'Username textbox was not displayed').toBeVisible();
        await expect(this.loginButton,'Login button was not displayed').toBeVisible();
        this.logger.success('Login page verified');
    }
    //#endregion
}
