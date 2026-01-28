import {test, expect} from "../../Fixtures/fixtures";

test.describe("Login tests", {tag: '@assesment'}, async()=>{
    annotation:[
        {
        type: "Test Plan",
        description:"Link to any test plan"
        },
    ];

    test("TC 004 - Verify Elements of the assesment Page",async({loginPage,assesmentPage})=>{
        await test.step('Login', async()=>{
            await loginPage.loginToTheApp('tomsmith','SuperSecretPassword!');
        });
        await test.step('Verify you are on the Assesment Page', async()=>{
            await expect(assesmentPage.successMessage).toBeVisible();
        });
        await test.step('Verify Elements of the Assesment Page', async()=>{
            await assesmentPage.closeNotificationButton.click();
            await expect(assesmentPage.successMessage).not.toBeVisible();
            await expect(assesmentPage.assesmentPageHeading).toBeVisible();
            await expect(assesmentPage.forkMeOnGitHubBanner).toBeVisible();
            await expect(assesmentPage.logOutButton).toBeVisible();
            await expect(assesmentPage.assesmentPageFooter).toBeVisible();
        });
        await test.step('TC- 005 LogOut From the App', async() =>{
            await assesmentPage.logOutButton.click();
            await expect(loginPage.loggedOutMessage).toBeVisible();
        });
    })
})