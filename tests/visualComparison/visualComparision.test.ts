import { LoginPage } from "../../pageFactory/pageRepository/LoginPage";
import { MyAccountPage } from "../../pageFactory/pageRepository/MyAccountPage";
import { expect, test } from '@playwright/test';

test(`Verify User Login.`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myAccountPage = new MyAccountPage(page);

    await loginPage.navigateToURL();
    await loginPage.loginToApplication();
    await myAccountPage.verifyMyAccountHeader();

    expect(await page.screenshot()).toMatchSnapshot('MyAccountView.png');
});
