import OrderPage from '../../pageobjects/orderPage/order.page';
import HomePage from '../../pageobjects/homePage/home.page';

describe('My Login application', () => {

    beforeEach(async () => {
        await OrderPage.open('order');
    })

    it('Verify user is able to navigate to home page when he clicks on Logo icon on the Orders Page', async () => {
        // await OrderPage.open('order');
        await (await OrderPage.linkLogo).click();
        await (await HomePage.buttonGetExpressVPN).waitForDisplayed({timeout: 5000});
        expect(browser).toHaveUrl('https://www.expressvpn.com/')
        expect(await (await HomePage.labelTitle).getText()).toEqual('The VPN that just works');
        
    });

    it('Verify Default language selected on the Orders Page', async() => {
        // await OrderPage.open('order');
        expect(await OrderPage.dropdownLangauge).toHaveTextContaining('English');

    });

    it('Verify error message when we enter an invalid email address',async() => {
        // await OrderPage.open('order');
        await (await OrderPage.inputEmail).setValue('testincorrect');
        await (await OrderPage.containerYearly).click();
        await (await OrderPage.labelEmailEror).waitForDisplayed({timeout: 5000});
        expect(await OrderPage.labelEmailEror).toHaveTextContaining('Please enter a valid email address.');
    })
});
