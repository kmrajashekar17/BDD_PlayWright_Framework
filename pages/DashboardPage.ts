import { expect, Page } from '@playwright/test';
import { BasePage } from '../framework/base/BasePage';

export class DashboardPage extends BasePage {

    //#region [Locators]
    private readonly dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });
    private readonly adminMenu = this.page.getByRole('link', { name: 'Admin' });
    private readonly adminPageHeader = this.page.getByRole('heading', { name: 'Admin' });
    private readonly userDropdown = this.page.locator('.oxd-userdropdown-tab');
    private readonly logoutLink = this.page.getByRole('menuitem', { name: 'Logout' });
    //#endregion

    //#region [Constructor]
    constructor(page: Page) {
        super(page);
    }
    //#endregion

    //#region [Action Methods]
    public async openAdminPage(): Promise<void> {

        this.logger.info('Opening admin page');
        await expect(this.adminMenu,'Admin menu was not visible').toBeVisible();
        await expect(this.adminMenu,'Admin menu was not enabled').toBeEnabled();
        await this.adminMenu.click();
        this.logger.success('Admin page opened');
    }

    public async logout(): Promise<void> {

        this.logger.info('Logout started');
        await expect(this.userDropdown,'User dropdown was not visible').toBeVisible();
        await expect(this.userDropdown,'User dropdown was not enabled').toBeEnabled();
        await this.userDropdown.click();
        await expect(this.logoutLink,'Logout link was not visible').toBeVisible();
        await expect(this.logoutLink,'Logout link was not enabled').toBeEnabled();
        await this.logoutLink.click();

        this.logger.success('Logout completed');
    }
    //#endregion

    //#region [Verification Methods]
    public async verifyDashboardDisplayed(): Promise<void> {
        this.logger.info('Verifying dashboard page');
        await expect(this.dashboardHeader,'Dashboard page was not displayed after login').toBeVisible();
        this.logger.success('Dashboard page verified');
    }

    public async verifyAdminPageDisplayed(): Promise<void> {
        this.logger.info('Verifying admin page');
        await expect(this.adminPageHeader,'Admin page was not displayed').toBeVisible();
        this.logger.success('Admin page verified');
    }
    //#endregion
}