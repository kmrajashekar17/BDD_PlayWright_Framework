export class DateHelper {

    //#region Current Date

    public static getCurrentDate():string{
        return new Date().toLocaleDateString();
    }

    //#endregion


    //#region Current Time

    public static getCurrentTime():string{
        return new Date().toLocaleTimeString();
    }

    //#endregion


    //#region Current Timestamp

    public static getTimeStamp():string{
        return Date.now().toString();
    }

    //#endregion


    //#region Add Days
    public static addDays(days: number):Date{
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }
    //#endregion

    //#region File Timestamp

    public static getFileTimestamp():string{
        const date = new Date();
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        return `${yyyy}${mm}${dd}_${hh}${min}${ss}`;
    }
    //#endregion
}
