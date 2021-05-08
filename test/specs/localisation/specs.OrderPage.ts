import OrderPage from '../../pageobjects/orderPage/order.page';
import {localisationData} from '../../pageobjects/orderPage/localisation';

describe('Localisation Tests for Order Page', async () => {

    beforeEach(async () => {
        await OrderPage.open('order');
    });

    // after(async ()=> {
    //     await OrderPage.selectLanguage('English');
    // })

    it('Verify Text displayed on the page when user changes language to Espanol', async () => {
        await (await OrderPage.linkFooterVPNMac).click();
        await OrderPage.selectLanguage('Español');
        await OrderPage.localisationValidation(localisationData.Espanol);
    });

    it('Verify Text displayed on the page when user changes language to Dansk', async () => {
        (await OrderPage.linkFooterVPNMac).click();
        await OrderPage.selectLanguage('Dansk');
        await OrderPage.localisationValidation(localisationData.Dansk);
    });

    // // to be automated
    // it('Verify Text displayed on the page when user changes language to Deutsch', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Francais', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Italiano', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Nederlands', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Norsk', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Polski', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Portugues', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Suomi', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Svenska', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Turkce', async () => {
        
    // });
    
    // it('Verify Text displayed on the page when user changes language to Russian', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Thai', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Japanese', async () => {
        
    // });

    // it('Verify Text displayed on the page when user changes language to Korean', async () => {
        
    // });
});
