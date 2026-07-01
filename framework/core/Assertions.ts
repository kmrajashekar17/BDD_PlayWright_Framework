import {
    expect,
    Locator
} from '@playwright/test';

export class Assertions {

    public async textContainsIgnoreCase(
        locator: Locator,
        expected: string,
        message?: string
    ): Promise<void> {

        const actual =
            await locator.textContent();

        expect(
            actual?.toLowerCase(),
            message
        ).toContain(
            expected.toLowerCase()
        );
    }

    public async valueContainsIgnoreCase(
        locator: Locator,
        expected: string,
        message?: string
    ): Promise<void> {

        const actual =
            await locator.inputValue();

        expect(
            actual.toLowerCase(),
            message
        ).toContain(
            expected.toLowerCase()
        );
    }

    public async valuesAreUnique(
        values: string[],
        message?: string
    ): Promise<void> {

        const unique =
            new Set(values);

        expect(
            unique.size,
            message
        ).toBe(
            values.length
        );
    }

    public async isSortedAscending(
        values: string[],
        message?: string
    ): Promise<void> {

        const sorted =
            [...values]
                .sort();

        expect(
            values,
            message
        ).toEqual(
            sorted
        );
    }

    public async isSortedDescending(
        values: string[],
        message?: string
    ): Promise<void> {

        const sorted =
            [...values]
                .sort()
                .reverse();

        expect(
            values,
            message
        ).toEqual(
            sorted
        );
    }

    public async containsOnly(
        actual: string[],
        expected: string[],
        message?: string
    ): Promise<void> {

        expect(
            actual.sort(),
            message
        ).toEqual(
            expected.sort()
        );
    }

    public async containsAny(
        actual: string[],
        expected: string[],
        message?: string
    ): Promise<void> {

        const result =
            expected.some(
                x => actual.includes(x)
            );

        expect(
            result,
            message
        ).toBeTruthy();
    }

    public async containsAll(
        actual: string[],
        expected: string[],
        message?: string
    ): Promise<void> {

        const result =
            expected.every(
                x => actual.includes(x)
            );

        expect(
            result,
            message
        ).toBeTruthy();
    }

    public async isGreaterThan(
        actual: number,
        expected: number,
        message?: string
    ): Promise<void> {

        expect(
            actual,
            message
        ).toBeGreaterThan(
            expected
        );
    }

    public async isLessThan(
        actual: number,
        expected: number,
        message?: string
    ): Promise<void> {

        expect(
            actual,
            message
        ).toBeLessThan(
            expected
        );
    }

    public async isBetween(
        actual: number,
        min: number,
        max: number,
        message?: string
    ): Promise<void> {

        expect(
            actual >= min &&
            actual <= max,
            message
        ).toBeTruthy();
    }
}