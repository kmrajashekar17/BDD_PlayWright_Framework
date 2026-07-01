export class RandomHelper {

    //#region Number

    public static getNumber(
        min: number,
        max: number
    ): number {

        return Math.floor(
            Math.random() *
            (max - min + 1)
        ) + min;
    }

    //#endregion


    //#region String

    public static getString(
        length = 10
    ): string {

        return Math.random()
            .toString(36)
            .substring(2, length + 2);
    }

    //#endregion


    //#region Email

    public static getEmail(): string {

        return `user_${Date.now()}@gmail.com`;
    }

    //#endregion
}