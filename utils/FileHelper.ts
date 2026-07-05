import * as fs from 'fs';

export class FileHelper {

    //#region Exists

    public static exists(path: string):boolean{
        return fs.existsSync(path);
    }

    //#endregion


    //#region Read

    public static read(path: string):string{
        return fs.readFileSync(path,'utf-8');
    }

    //#endregion


    //#region Write

    public static write(path: string,content: string):void{
        fs.writeFileSync(path,content);
    }

    //#endregion


    //#region Append

    public static append(path: string,content: string):void{
        fs.appendFileSync(path,content);
    }

    //#endregion


    //#region Delete

    public static delete(path: string):void{
        if (fs.existsSync(path)){
            fs.unlinkSync(path);
        }
    }

    //#endregion
}
