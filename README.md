# Only Login.feature is avaialble for run 
# rest or dummy features and steps for reference 
# Playwright + Cucumber + TypeScript BDD Framework

## Framework Structure

```text
BDD_PLAYWRIGHT_FRAMEWORK
│
├── .github
├── .vscode
│
├── config
│   └── env.ts
│
├── features
│   └── *.feature
│
├── framework
│   ├── context
│   │    └── ScenarioContext.ts
│   │
│   ├── core
│   │    └── Logger.ts
│   │
│   └── factory
│        └── PageManager.ts
│
├── hooks
│   └── Hooks.ts
│
├── pages
│   └── *.ts
│
├── reports
│   ├── allure-results
│   ├── allure-report
│   ├── screenshots
│   └── archive
│        └── yyyyMMdd_HHmmss
│             ├── allure-report
│             ├── allure-results
│             └── screenshots
│
├── scripts
│   └── GenerateAllureReport.ts
│
├── step-definitions
│   └── *.ts
│
├── support
│   └── CustomWorld.ts
│
├── test-data
├── test-results
├── uploads
│
├── utils
│   ├── AlertHelper.ts
│   ├── DateHelper.ts
│   ├── FileHelper.ts
│   ├── JavaScriptHelper.ts
│   ├── RandomHelper.ts
│   └── StringHelper.ts
│
├── .env
├── allure.config.ts
├── cucumber.js
├── package.json
├── tsconfig.json
└── README.md
```

## Implemented Features

- Playwright + Cucumber + TypeScript
- Page Object Model
- Page Factory
- Scenario Context
- Environment Configuration
- Screenshot on Failure
- Allure Reporting
- Categories
- Environment Details
- Executor Details
- Historical Trends
- Archived Executions
- Open Previous Reports
- Preserve Last 50 Executions
- Feature Tagging
- Logger Utility

## Required Installation Commands

### Initialize Project

```bash
npm init -y
```

### Playwright

```bash
npm install -D playwright @playwright/test
npx playwright install
```

### Cucumber

```bash
npm install @cucumber/cucumber
```

### TypeScript

```bash
npm install -D typescript ts-node @types/node
npx tsc --init
```

### Environment Variables

```bash
npm install dotenv
```

### Allure

```bash
npm install -D allure-commandline
npm install -D allure-cucumberjs
npm install -D allure-js-commons
```

## Installation Verification Commands

```bash
node -v
npm -v
npx playwright --version
npx playwright install --list
npx cucumber-js --version
npx tsc --noEmit
npm list playwright
npm list @playwright/test
npm list @cucumber/cucumber
npm list allure-cucumberjs
npm list allure-js-commons
npm list allure-commandline
```

## Execution Commands

### Execute All Tests

```bash
npx cucumber-js
```

### Execute Specific Tag

```bash
npx cucumber-js --tags "@ValidateLogin"
```

### Execute Smoke Suite

```bash
npm run test:smoke
```

### Execute Regression Suite

```bash
npm run test:regression
```

### Execute in Headed Mode

```bash
npm run test:headed
```

### Browser Specific Execution

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

## Report Commands

### Generate and Open Report

```bash
npm run report
```

This command:
- Archives previous execution
- Archives screenshots
- Archives allure-results
- Archives allure-report
- Preserves history
- Generates new report
- Opens report automatically
- Keeps only last 50 executions

### Generate Report Only

```bash
npm run allure:generate
```

### Open Latest Report

```bash
npm run allure:open
```

### Open Archived Report

```bash
npx allure-commandline open reports/archive/<timestamp>/allure-report
```

Example:

```bash
npx allure-commandline open reports/archive/20260701_200739/allure-report
```

## Reporting Features

### Screenshot on Failure

```text
reports/screenshots
    └── Verify_login_and_logout.png
```

### Categories

- Locator Issues
- Assertion Failures
- Timeout Issues
- Network/API Failures
- Application Exceptions

### Historical Trends

- Pass/Fail Trend
- Duration Trend
- Retry Trend
- Historical Success Rate
- Previous Executions

### Execution Archive

```text
reports
└── archive
     └── yyyyMMdd_HHmmss
          ├── allure-report
          ├── allure-results
          └── screenshots
```

## Framework Design Decisions

- Allure reporting only
- Multiple HTML Reporter removed
- Scenario name used for screenshot naming
- Screenshots captured only on failure
- Allure history preserved
- Archive previous execution
- Preserve only last 50 executions
- Categories limited to major failure types
- ScenarioContext cleared after every scenario
- Browser launched once using BeforeAll
- Browser context created per scenario

## Useful Commands

```bash
npx tsc --noEmit
npm list
npm outdated
npm audit
npx playwright install --list
npm run report
npx cucumber-js --tags "@ValidateLogin"
```
