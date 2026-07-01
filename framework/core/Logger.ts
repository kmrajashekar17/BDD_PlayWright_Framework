export class Logger {

    //#region Information
    public static info(message: string): void {
        console.log(
            `[INFO] ${new Date().toISOString()} : ${message}`
        );
    }
    //#endregion

    //#region Warning
    public static warning(message: string): void {
        console.warn(
            `[WARNING] ${new Date().toISOString()} : ${message}`
        );
    }
    //#endregion

    //#region Error
    public static error(message: string): void {
        console.error(
            `[ERROR] ${new Date().toISOString()} : ${message}`
        );
    }
    //#endregion

    //#region Debug
    public static debug(message: string): void {
        console.debug(
            `[DEBUG] ${new Date().toISOString()} : ${message}`
        );
    }
    //#endregion

    //#region Success
    public static success(message: string): void {
        console.log(
            `[SUCCESS] ${new Date().toISOString()} : ${message}`
        );
    }
    //#endregion
}