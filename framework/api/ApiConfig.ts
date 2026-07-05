import { ENV } from '../../config/env';

export class ApiConfig {

    public static readonly baseUrl = ENV.apiBaseUrl;

    public static readonly apiKey = ENV.reqresApiKey;

    public static readonly headers = {
        'x-api-key': ApiConfig.apiKey,
        'Content-Type': 'application/json'
    };
}
