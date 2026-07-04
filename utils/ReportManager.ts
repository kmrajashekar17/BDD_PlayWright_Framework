import * as fs from 'fs';
import * as path from 'path';
import { DateHelper } from './DateHelper';
import { Logger } from '../framework/core/Logger';

export class ReportManager {

    //#region Prepare Execution
    public static prepareExecution(): void {

        this.archiveExecution();
        this.copyHistory();
        this.cleanExecution();

        Logger.success('Framework ready for execution');
    }
    //#endregion

    //#region Archive Execution
    private static archiveExecution(): void {

        const currentReport = 'reports/allure-report';
        const currentResults = 'reports/allure-results';
        const currentScreenshots = 'reports/screenshots';
        const archiveFolder = 'reports/archive';

        if (
            !fs.existsSync(currentReport) &&
            !fs.existsSync(currentResults) &&
            !fs.existsSync(currentScreenshots)
        ) {
            return;
        }

        const executionFolder =
            `${archiveFolder}/${DateHelper.getFileTimestamp()}`;

        fs.mkdirSync(executionFolder, { recursive: true });

        if (fs.existsSync(currentReport)) {
            fs.cpSync(
                currentReport,
                `${executionFolder}/allure-report`,
                { recursive: true }
            );
        }

        if (fs.existsSync(currentResults)) {
            fs.cpSync(
                currentResults,
                `${executionFolder}/allure-results`,
                { recursive: true }
            );
        }

        if (fs.existsSync(currentScreenshots)) {
            fs.cpSync(
                currentScreenshots,
                `${executionFolder}/screenshots`,
                { recursive: true }
            );
        }

        Logger.info(`Execution archived : ${executionFolder}`);
    }
    //#endregion

    //#region Copy History
    private static copyHistory(): void {

        const historySource =
            'reports/allure-report/history';

        const historyDestination =
            'reports/allure-results/history';

        if (!fs.existsSync(historySource)) {
            return;
        }

        fs.cpSync(
            historySource,
            historyDestination,
            { recursive: true }
        );

        Logger.info('History copied');
    }
    //#endregion

    //#region Clean Execution
    private static cleanExecution(): void {

        const resultsFolder =
            'reports/allure-results';

        if (!fs.existsSync(resultsFolder)) {
            return;
        }

        const files =
            fs.readdirSync(resultsFolder);

        for (const file of files) {

            if (
                file === 'history' ||
                file === 'categories.json' ||
                file === 'environment.properties' ||
                file === 'executor.json'
            ) {
                continue;
            }

            fs.rmSync(
                path.join(resultsFolder, file),
                {
                    recursive: true,
                    force: true
                }
            );
        }

        Logger.info(
            'Previous execution cleaned'
        );
    }
    //#endregion
}