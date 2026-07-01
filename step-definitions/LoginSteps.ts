import { Given, When, Then } from '@cucumber/cucumber';
import { ENV } from '../config/env';
import { CustomWorld } from '../support/CustomWorld';

Given('user launches the application', async function(this: CustomWorld) {   
    await this.pages.getLoginPage().openApplication();
});

When('user enters username', async function(this: CustomWorld) {
    await this.pages.getLoginPage().enterUserName(ENV.username);
});

When('user enters password', async function(this: CustomWorld) {
    await this.pages.getLoginPage().enterPassword(ENV.password);
});

When('user clicks login button', async function(this: CustomWorld) {
    await this.pages.getLoginPage().clickLogin();
});

Then('user should be logged in successfully', async function(this: CustomWorld) {
    await this.pages.getLoginPage()
                    .verifyLoginSuccessful();
});

When('user clicks logout button', async function(this: CustomWorld) {
    await this.pages.getLoginPage()
                    .clickLogout();
});

Then('login page should be displayed', async function(this: CustomWorld) {
    await this.pages.getLoginPage()
                    .verifyLoginPageDisplayed();
});

When('user logs in as admin', async function(this: CustomWorld) {

    await this.pages.getLoginPage()
                    .loginAsAdmin();
});