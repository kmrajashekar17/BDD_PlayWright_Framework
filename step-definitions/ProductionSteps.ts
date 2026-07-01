import { Then, When } from '@cucumber/cucumber';

import { ScenarioContext } from '../framework/context/ScenarioContext';
import { CustomWorld } from '../support/CustomWorld';

When(
    'user adds product {string}',
    async function (
        this: CustomWorld,
        productName: string
    ) {

        ScenarioContext.set(
            'ProductName',
            productName
        );

        await this.pages
            .getDashboardPage()
            .openProducts();

        await this.pages
            .getProductPage()
            .addProduct(productName);
    }
);

When(
    'user cancels product creation for {string}',
    async function (
        this: CustomWorld,
        productName: string
    ) {

        await this.pages
            .getDashboardPage()
            .openProducts();

        await this.pages
            .getProductPage()
            .cancelProduct(productName);
    }
);

Then(
    'product {string} should be displayed',
    async function (
        this: CustomWorld,
        productName: string
    ) {

        await this.pages
            .getProductPage()
            .verifyProductExists(productName);
    }
);

Then(
    'product page should remain displayed',
    async function (
        this: CustomWorld
    ) {

        await this.pages
            .getProductPage()
            .verifyProductPageDisplayed();
    }
);