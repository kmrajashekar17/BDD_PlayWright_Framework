import { Given, When, Then } from '@cucumber/cucumber';
import { ENV } from '../config/env';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CustomWorld } from '../support/CustomWorld';

When('user enters admin username', async function(this: CustomWorld) {

    await this.pages.get(LoginPage).enterUserName(ENV.username);
});

When('user enters admin password', async function(this: CustomWorld) {

    await this.pages.get(LoginPage).enterPassword(ENV.password);
});

When('user enters {string} username', async function(this: CustomWorld, userName: string) {

    await this.pages.get(LoginPage).enterUserName(userName);
});

When('user enters {string} password', async function(this: CustomWorld, password: string) {

    await this.pages.get(LoginPage).enterPassword(password);
});


Then('error message {string} should be displayed', async function(this: CustomWorld, errorMessage: string) {

    await this.pages.get(LoginPage).verifyErrorMessageDisplayed(errorMessage);
});

When('user clicks login button', async function(this: CustomWorld) {

    await this.pages.get(LoginPage).clickLogin();
});

When('user logs in as admin', async function(this: CustomWorld) {

    await this.pages.get(LoginPage).loginAsAdmin();
});

Then('dashboard page should be displayed', async function(this: CustomWorld) {

    await this.pages.get(DashboardPage).verifyDashboardDisplayed();
});

When('user opens admin page', async function(this: CustomWorld) {

    await this.pages.get(DashboardPage).openAdminPage();
});

Then('admin page should be displayed', async function(this: CustomWorld) {

    await this.pages.get(DashboardPage).verifyAdminPageDisplayed();
});

When('user logs out', async function(this: CustomWorld) {

    await this.pages.get(DashboardPage).logout();
});

Then('login page should be displayed', async function(this: CustomWorld) {

    await this.pages.get(LoginPage).verifyLoginPageDisplayed();
});