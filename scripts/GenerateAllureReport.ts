import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { DateHelper } from '../utils/DateHelper';

//#region [paths]
const reportsFolder = 'reports';
const currentReport = 'reports/allure-report';
const currentResults = 'reports/allure-results';
const currentScreenshots = 'reports/screenshots';
const archiveFolder = 'reports/archive';
//#endregion

//#region [archive previous execution]
if (fs.existsSync(currentReport) || fs.existsSync(currentResults) || fs.existsSync(currentScreenshots)) {
    const executionFolder = `${archiveFolder}/${DateHelper.getFileTimestamp()}`;
    fs.mkdirSync(executionFolder, { recursive: true });

    if (fs.existsSync(currentReport)) {
        fs.cpSync(currentReport, `${executionFolder}/allure-report`, { recursive: true });
        console.log('Archived allure-report');
    }

    if (fs.existsSync(currentResults)) {
        fs.cpSync(currentResults, `${executionFolder}/allure-results`, { recursive: true });
        console.log('Archived allure-results');
    }

    if (fs.existsSync(currentScreenshots)) {
        fs.cpSync(currentScreenshots, `${executionFolder}/screenshots`, { recursive: true });
        console.log('Archived screenshots');
    }

    console.log(`Execution archived : ${executionFolder}`);
}
//#endregion

//#region [retain last 50 executions]
if (fs.existsSync(archiveFolder)) {
    const executions = fs.readdirSync(archiveFolder).sort().reverse();
    const oldExecutions = executions.slice(50);

    for (const execution of oldExecutions) {
        fs.rmSync(path.join(archiveFolder, execution), { recursive: true, force: true });
        console.log(`Deleted old archive : ${execution}`);
    }
}
//#endregion

//#region [copy history]
const historySource = path.join(currentReport, 'history');
const historyDestination = path.join(currentResults, 'history');
if (fs.existsSync(historySource)) {
    fs.cpSync(historySource, historyDestination, { recursive: true });
    console.log('History copied');
}
//#endregion

//#region [generate report]
execSync('npx allure-commandline generate reports/allure-results --clean -o reports/allure-report', { stdio: 'inherit' });
//#endregion

//#region [open report]
execSync('npx allure-commandline open reports/allure-report', { stdio: 'inherit' });
//#endregion