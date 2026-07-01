import * as dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    browser:
        process.env.BROWSER ??
        'chromium',

    headless:
        process.env.HEADLESS === 'true',

    slowMo:
        Number(
            process.env.SLOWMO ?? 0
        ),

    baseUrl:
        process.env.BASE_URL ?? '',

    username:
        process.env.APP_USERNAME  ?? '',

    password:
        process.env.APP_PASSWORD ?? '',

    timeout:
        Number(
            process.env.TIMEOUT ?? 30000
        )
};