import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/CustomWorld';
import { ScenarioContext } from '../framework/context/ScenarioContext';
import { ReqResInApi } from '../framework/api/ReqResInApi';

const reqResInApi = new ReqResInApi();

When('user sends GET request to list all users',async function(this: CustomWorld){
    await reqResInApi.getUsers(this.apiRequest);
});

When('user sends POST request to create a new user',async function(this: CustomWorld){
    await reqResInApi.createUser(this.apiRequest);
});

When('user sends PUT request to update user with id {int}',async function(this: CustomWorld,userId: number){
    await reqResInApi.updateUser(this.apiRequest,userId);
});

When('user sends PATCH request to partially update user with id {int}',async function(this: CustomWorld,userId: number){
    await reqResInApi.patchUser(this.apiRequest,userId);
});

When('user sends DELETE request to delete user with id {int}',async function(this: CustomWorld,userId: number){
    await reqResInApi.deleteUser(this.apiRequest,userId);
});

When('user sends GET request to list users with page {int}',async function(this: CustomWorld,page: number){
    await reqResInApi.getUsersWithQueryParams(this.apiRequest,{page});
});

Then('API response status should be {int}',async function(expectedStatus: number){
    const actualStatus = ScenarioContext.get<number>('apiStatusCode');
    expect(actualStatus).toBe(expectedStatus);
});

Then('API response should contain user records',async function(){
    const body = ScenarioContext.get<{data: unknown[]}>('apiResponseBody');
    expect(body.data.length).toBeGreaterThan(0);
});

Then('created user details should match request',async function(){
    const body = ScenarioContext.get<{name: string,job: string}>('apiResponseBody');
    const payload = ScenarioContext.get<{name: string,job: string}>('apiRequestPayload');
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
});

Then('updated user details should match request',async function(){
    const body = ScenarioContext.get<{name: string,job: string}>('apiResponseBody');
    const payload = ScenarioContext.get<{name: string,job: string}>('apiRequestPayload');
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
});

Then('patched user job should be {string}',async function(expectedJob: string){
    const body = ScenarioContext.get<{job: string}>('apiResponseBody');
    expect(body.job).toBe(expectedJob);
});

Then('API response page should be {int}',async function(expectedPage: number){
    const body = ScenarioContext.get<{page: number}>('apiResponseBody');
    expect(body.page).toBe(expectedPage);
});
