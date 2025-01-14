import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageFactory/pageRepository/LoginPage';
import { MyAccountPage } from '../pageFactory/pageRepository/MyAccountPage';
import { MyAddressesPage } from '../pageFactory/pageRepository/MyAddressesPage'
import { MyPersonalInformationPage } from '../pageFactory/pageRepository/MyPersonalInformationPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    myAddressesPage: async ({ page }, use) => {
        await use(new MyAddressesPage(page));
    },
    myPersonalInformationPage: async ({ page }, use) => {
        await use(new MyPersonalInformationPage(page));
    }
});

export default test;