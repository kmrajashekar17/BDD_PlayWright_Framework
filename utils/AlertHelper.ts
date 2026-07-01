import { Dialog, Page } from '@playwright/test';

export class AlertHelper {

    //#region Accept

    public static async accept(page: Page): Promise<void> {

        page.once('dialog', async (dialog: Dialog) => {

            await dialog.accept();
        });
    }

    //#endregion


    //#region Accept With Text

    public static async acceptWithText(
        page: Page,
        text: string
    ): Promise<void> {

        page.once('dialog', async (dialog: Dialog) => {

            await dialog.accept(text);
        });
    }

    //#endregion


    //#region Dismiss

    public static async dismiss(page: Page): Promise<void> {

        page.once('dialog', async (dialog: Dialog) => {

            await dialog.dismiss();
        });
    }

    //#endregion


    //#region Get Message

    public static async getMessage(page: Page): Promise<string> {

        return new Promise((resolve) => {

            page.once('dialog', async (dialog: Dialog) => {

                const message = dialog.message();

                await dialog.accept();

                resolve(message);
            });
        });
    }

    //#endregion
}