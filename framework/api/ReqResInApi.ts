import { APIRequestContext } from '@playwright/test';
import { ApiConfig } from './ApiConfig';
import { ScenarioContext } from '../context/ScenarioContext';
import { Logger } from '../core/Logger';

export class ReqResInApi {

    private readonly usersUrl = `${ApiConfig.baseUrl}/users`;

    public async getUsers(request: APIRequestContext):Promise<void>{
        const response = await request.get(this.usersUrl,{headers: ApiConfig.headers});
        ScenarioContext.set('apiStatusCode',response.status());
        ScenarioContext.set('apiResponseBody',await response.json());
        Logger.info(`GET users completed with status ${response.status()}`);
    }

    public async createUser(request: APIRequestContext):Promise<void>{
        const payload = {name: `user_${Date.now()}`,job: 'QA Engineer'};
        ScenarioContext.set('apiRequestPayload',payload);
        const response = await request.post(this.usersUrl,{headers: ApiConfig.headers,data: payload});
        ScenarioContext.set('apiStatusCode',response.status());
        ScenarioContext.set('apiResponseBody',await response.json());
        Logger.info(`POST user completed with status ${response.status()}`);
    }

    public async updateUser(request: APIRequestContext,userId: number):Promise<void>{
        const payload = {name: 'Updated User',job: 'Senior QA Engineer'};
        ScenarioContext.set('apiRequestPayload',payload);
        ScenarioContext.set('userId',userId);
        const response = await request.put(`${this.usersUrl}/${userId}`,{headers: ApiConfig.headers,data: payload});
        ScenarioContext.set('apiStatusCode',response.status());
        ScenarioContext.set('apiResponseBody',await response.json());
        Logger.info(`PUT user ${userId} completed with status ${response.status()}`);
    }

    public async patchUser(request: APIRequestContext,userId: number):Promise<void>{
        const payload = {job: 'Lead QA Engineer'};
        ScenarioContext.set('apiRequestPayload',payload);
        ScenarioContext.set('userId',userId);
        const response = await request.patch(`${this.usersUrl}/${userId}`,{headers: ApiConfig.headers,data: payload});
        ScenarioContext.set('apiStatusCode',response.status());
        ScenarioContext.set('apiResponseBody',await response.json());
        Logger.info(`PATCH user ${userId} completed with status ${response.status()}`);
    }

    public async deleteUser(request: APIRequestContext,userId: number):Promise<void>{
        ScenarioContext.set('userId',userId);
        const response = await request.delete(`${this.usersUrl}/${userId}`,{headers: ApiConfig.headers});
        ScenarioContext.set('apiStatusCode',response.status());
        Logger.info(`DELETE user ${userId} completed with status ${response.status()}`);
    }

    public async getUsersWithQueryParams(request: APIRequestContext,params: Record<string, string | number>):Promise<void>{
        ScenarioContext.set('apiQueryParams',params);
        const response = await request.get(this.usersUrl,{headers: ApiConfig.headers,params});
        ScenarioContext.set('apiStatusCode',response.status());
        ScenarioContext.set('apiResponseBody',await response.json());
        Logger.info(`GET users with params completed with status ${response.status()}`);
    }
}
