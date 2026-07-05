import { expect } from '@playwright/test';

export class SoftAssertions {

    public toBe(actual: unknown,expected: unknown,message?: string):void{
        expect.soft(actual,message).toBe(expected);
    }

    public toEqual(actual: unknown,expected: unknown,message?: string):void{
        expect.soft(actual,message).toEqual(expected);
    }

    public toContain(actual: unknown,expected: unknown,message?: string):void{
        expect.soft(actual,message).toContain(expected);
    }

    public toBeTruthy(actual: unknown,message?: string):void{
        expect.soft(actual,message).toBeTruthy();
    }

    public toBeFalsy(actual: unknown,message?: string):void{
        expect.soft(actual,message).toBeFalsy();
    }
}
