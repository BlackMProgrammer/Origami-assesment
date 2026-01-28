import {Page, Locator,expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly loginPageTitle: Locator;
    readonly loginPageSubTitle: Locator;
    readonly userNameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly loginPageFooter: Locator;
    readonly loggedOutMessage: Locator;
    readonly failedUserLoginMessage: Locator;
    readonly failedPasswordLoginMessage: Locator;
    readonly closeMessage: Locator;
    readonly forkMeOnGitHubBanner: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginPageTitle = page.getByRole('heading', { name: 'Login Page' });
        this.loginPageSubTitle = page.getByRole('heading', { name: 'This is where you can log' });
        this.userNameTextBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: ' Login' });
        this.loginPageFooter = page.getByText('Powered by Elemental Selenium');
        this.loggedOutMessage = page.getByText('You logged out of the secure');
        this.failedUserLoginMessage = page.getByText('Your username is invalid! ×');
        this.failedPasswordLoginMessage = page.getByText('Your password is invalid! ×');
        this.closeMessage = page.getByRole('link', { name: '×' });
         this.forkMeOnGitHubBanner = page.getByRole('img', { name: 'Fork me on GitHub' });
    }

    async navigate(){
        await this.page.goto('/login');
    }

    async loginToTheApp(username: string, password: string){
        this.navigate();
        await this.page.waitForTimeout(4000);
        await this.userNameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}