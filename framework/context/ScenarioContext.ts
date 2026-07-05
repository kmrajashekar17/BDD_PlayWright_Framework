export class ScenarioContext {

    private static readonly context = new Map<string, unknown>();

    public static set<T>(key: string,value: T):void{
        this.context.set(key,value);
    }

    public static get<T>(key: string):T{
        return this.context.get(key) as T;
    }

    public static has(key: string):boolean{
        return this.context.has(key);
    }

    public static remove(key: string):void{
        this.context.delete(key);
    }

    public static clear():void{
        this.context.clear();
    }

    public static getOrDefault<T>(key: string,defaultValue: T):T{
        return this.context.has(key)? this.context.get(key) as T: defaultValue;
    }

    public static count():number{
        return this.context.size;
    }

}
