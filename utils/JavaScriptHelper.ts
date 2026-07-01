import { Locator, Page } from '@playwright/test';

export class JavaScriptHelper {

    //#region Click

    public static async click(
        page: Page,
        locator: Locator
    ): Promise<void> {

        await page.evaluate(
            element => (element as HTMLElement).click(),
            await locator.elementHandle()
        );
    }

    //#endregion


    //#region Scroll Into View

    public static async scrollIntoView(
        locator: Locator
    ): Promise<void> {

        await locator.scrollIntoViewIfNeeded();
    }

    //#endregion


    //#region Set Value

    public static async setValue(
        locator: Locator,
        value: string
    ): Promise<void> {

        await locator.evaluate(
            (element, val) => {
                (element as HTMLInputElement).value = val;
            },
            value
        );
    }

    //#endregion


    //#region Get Value

    public static async getValue(
        locator: Locator
    ): Promise<string> {

        return await locator.evaluate(
            element => (element as HTMLInputElement).value
        );
    }

    //#endregion


    //#region Highlight

    public static async highlight(
        locator: Locator
    ): Promise<void> {

        await locator.evaluate(element => {

            (element as HTMLElement)
                .style
                .border =
                '3px solid red';
        });
    }

    //#endregion
}