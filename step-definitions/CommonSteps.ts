import { Given } from '@cucumber/cucumber';

import { CustomWorld } from '../support/CustomWorld';

Given(
    'user opens the application',
    async function (this: CustomWorld) {

        await this.pages
            .getLoginPage()
            .openApplication();
    }
);