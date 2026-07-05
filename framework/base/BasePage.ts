import { Page } from '@playwright/test';

import { Operations } from '../core/Operations';
import { Assertions } from '../core/Assertions';
import { SoftAssertions } from '../core/SoftAssertions';
import { Logger } from '../core/Logger';

export abstract class BasePage {

    protected readonly page: Page;
    protected readonly operation: Operations;
    protected readonly assertion: Assertions;
    protected readonly softAssertion: SoftAssertions;
    protected readonly logger = Logger;

    constructor(page: Page){
        this.page = page;
        this.operation =new Operations(page);
        this.assertion =new Assertions();
        this.softAssertion =new SoftAssertions();
    }
}
