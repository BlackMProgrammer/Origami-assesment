import {test as base} from "@playwright/test";
export { expect } from "@playwright/test";

//pages
import { LoginPage } from "../page-objects/login-page";
import { AssesmentPage } from "../page-objects/assesment-page";

//exportPages to be references Directly on page objects if needed
export {LoginPage} from '../page-objects/login-page';
export {AssesmentPage} from '../page-objects/assesment-page';

//DataFiles
//export {Env} from "../env"

type MyFixtures = {
    loginPage: LoginPage;
    assesmentPage: AssesmentPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use) =>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    assesmentPage: async({page}, use) =>{
        const assesmentPage = new AssesmentPage(page);
        await use(assesmentPage);
    }
})