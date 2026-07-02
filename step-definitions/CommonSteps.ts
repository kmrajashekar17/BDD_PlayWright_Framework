import { Given } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/CustomWorld';

Given('user launches the application',async function(this: CustomWorld) {
        await this.pages.get(LoginPage).openApplication();
    }
);