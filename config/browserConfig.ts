import 'dotenv/config';

export const BrowserConfig = {

    browser:
        process.env.BROWSER ??
        'chromium',

    headless:
        process.env.HEADLESS === 'true',

    slowMo:
        Number(process.env.SLOW_MO ?? 0),

    timeout:
        Number(process.env.TIMEOUT ?? 30000),

    assertionTimeout:
        Number(process.env.ASSERT_TIMEOUT ?? 5000),

    video:
        process.env.VIDEO ??
        'retain-on-failure',

    trace:
        process.env.TRACE ??
        'retain-on-failure',

    screenshot:
        process.env.SCREENSHOT ??
        'only-on-failure'
};