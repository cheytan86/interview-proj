import OrderPage from '../../pageobjects/orderPage/order.page';
import VPNMacPage from '../../pageobjects/vpnSoftware/vpnMac.page';


describe('My Login application', async () => {

    beforeEach(async () => {
        await OrderPage.open('order');
    })

    it('Verify user is able to navigate to home page when he clicks on Logo icon on the Orders Page', async () => {
        await (await OrderPage.linkFooterVPNMac).click();
        await (await VPNMacPage.buttonDownload).waitForDisplayed({timeout: 5000});
        expect(browser).toHaveUrl('https://www.expressvpn.com/vpn-software/vpn-mac');
        expect(await VPNMacPage.labelTitle).toHaveTextContaining('Download ExpressVPN, the best VPN for Mac');
        // expect(true).toEqual(false);
    });
});
