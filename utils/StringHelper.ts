export class StringHelper {

    //#region Equals Ignore Case

    public static equalsIgnoreCase(source: string,target: string):boolean{
        return source.toLowerCase() === target.toLowerCase();
    }

    //#endregion


    //#region Contains Ignore Case

    public static containsIgnoreCase(source: string,target: string):boolean{
        return source.toLowerCase().includes(target.toLowerCase());
    }

    //#endregion


    //#region Is Null Or Empty

    public static isNullOrEmpty(value: string):boolean{
        return !value || value.trim() === '';
    }

    //#endregion
}
