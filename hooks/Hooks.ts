import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, request as playwrightRequest } from '@playwright/test';
import { CustomWorld } from '../support/CustomWorld';
import { ScenarioContext } from '../framework/context/ScenarioContext';
import { ENV } from '../config/env';
import { PageManager } from '../framework/factory/PageManager';
import { DateHelper } from '../utils/DateHelper';
import { Logger } from '../framework/core/Logger';
import { ReportManager } from '../utils/ReportManager';
import { ApiConfig } from '../framework/api/ApiConfig';
import * as fs from 'fs';

setDefaultTimeout(120000);
let browser: Browser;

//#region Before All
BeforeAll(async ()=>{
    ReportManager.prepareExecution();
    const executionId = DateHelper.getFileTimestamp();
    Logger.info(`Execution Started : ${executionId}`);
});
//#endregion

AfterAll(async ()=>{
    if (browser) {
        await browser.close();
    }
});

Before({ tags: 'not @APITests' },async function(this: CustomWorld){
    if (!browser) {
        const isGitHub = process.env.GITHUB_ACTIONS === 'true';
        browser = await chromium.launch({
            headless: isGitHub ? true : ENV.headless,
            slowMo: ENV.slowMo,
            ...(isGitHub ? {} : { args: ['--start-maximized'] })
        });
        console.log(`Browser launched. GitHub=${isGitHub}`);
    }
    this.context = await browser.newContext({
        viewport: null,
        ignoreHTTPSErrors: true
    });
    this.page = await this.context.newPage();
    this.pages = new PageManager(this.page);
    await this.page.setDefaultTimeout(ENV.timeout);
    ScenarioContext.clear();
});

After({ tags: 'not @APITests' },async function(this: CustomWorld, scenario){
    if (scenario.result?.status === Status.FAILED) {
        const screenshotFolder = 'reports/screenshots';
        if (!fs.existsSync(screenshotFolder)) {
            fs.mkdirSync(screenshotFolder, { recursive: true });
        }
        const scenarioName = scenario.pickle.name
            .replace(/[<>:"/\\|?*]/g, '')
            .replace(/\s+/g, '_');
        const filePath = `${screenshotFolder}/${scenarioName}.png`;
        const screenshot = await this.page.screenshot({
            path: filePath,
            fullPage: true
        });
        await this.attach(screenshot, 'image/png');
        Logger.error(`Screenshot captured : ${filePath}`);
        Logger.error(`Scenario failed : ${scenario.pickle.name}`);
        Logger.error(`${scenario.result.message}`);
    }
    ScenarioContext.clear();
    await this.context.close();
});

Before({ tags: '@APITests' },async function(this: CustomWorld){
    ScenarioContext.clear();
    this.apiRequest = await playwrightRequest.newContext({
        extraHTTPHeaders: ApiConfig.headers
    });
});

After({ tags: '@APITests' },async function(this: CustomWorld){
    ScenarioContext.clear();
    await this.apiRequest.dispose();
});
