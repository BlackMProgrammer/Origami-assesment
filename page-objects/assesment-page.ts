import {Page, Locator,expect} from '@playwright/test';

export class AssesmentPage{
    readonly page : Page;
    readonly successMessage: Locator;
    readonly closeNotificationButton: Locator;
    readonly assesmentPageHeading: Locator;
    readonly logOutButton: Locator;
    readonly assesmentPageFooter: Locator;
    readonly forkMeOnGitHubBanner: Locator;

    constructor(page:Page){
        this.page = page;
        this.successMessage = page.getByText('You logged into a secure area');
        this.closeNotificationButton = page.getByRole('link', { name: '×' });
        this.assesmentPageHeading = page.getByRole('heading', { name: 'Secure Area', exact: true });
        this.logOutButton = page.getByRole('link', { name: 'Logout' });
        this.assesmentPageFooter = page.getByText('Powered by Elemental Selenium');
        this.forkMeOnGitHubBanner = page.getByRole('img', { name: 'Fork me on GitHub' });
        
    }
}