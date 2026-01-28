import {test, expect} from "../../Fixtures/fixtures";

test.describe("Login tests", {tag: '@login'}, async()=>{
    annotation:[
        {
        type: "Test Plan",
        description:"Link to any test plan"
        },
    ];

    test("TC 001 - Succesfull Login", async({loginPage, assesmentPage})=>{
        await test.step('Login', async()=>{
            await loginPage.loginToTheApp('tomsmith','SuperSecretPassword!');
        });
        await test.step('Verify Success Message', async()=>{
            await expect(assesmentPage.successMessage).toBeVisible();
        })
    });

    test("TC 002 - Failed Login Username", async({loginPage}) => {
        await test.step('Try Login', async()=>{
            await loginPage.loginToTheApp('FailedUser','SuperSecretPassword!');
        });
        await test.step('Read Failed Username Message', async()=>{
            await expect(loginPage.failedUserLoginMessage).toBeVisible();
        });
    });

    test("TC 003 - Failed Login Password", async({loginPage}) => {
        await test.step('Try Login', async()=>{
            await loginPage.loginToTheApp('tomsmith','JustARandomMemory123');
        });
        await test.step('Read Failed Password Message', async()=>{
            await expect(loginPage.failedPasswordLoginMessage).toBeVisible();
        });
    });
})