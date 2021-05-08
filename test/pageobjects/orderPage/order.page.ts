import Page from '../page';

class OrderPage extends Page {
    

    // Dropdowns
    get dropdownLangauge() { return $('.nav-menu-dropdown button.language-picker') }
    get dropdownExpiryMonth() { return $('#signup_expiry_month') }
    get dropdownExpiryYear() { return $('#signup_expiry_year') }
    get dropdownLanguageOption() { return $('.nav-menu-lang .menu-group-list') }

    // Label
    get labelTitle() { return $('h1') }
    get labelTitlePara() { return $('div.onsale-ribbon-margin p') }
    get labelEmailEror() { return $('#signup_email-error') }

    // container 
    get containerMonthly() { return $('#package_1') }
    get containerSixMonths() { return $('#package_2') }
    get containerYearly() { return $('#package_3') }

    // Textfield
    get inputEmail() { return $('input#signup_email') }
    get inputFirstName() { return $('#signup_first_name') }
    get inputLastName() { return $('#signup_last_name') }
    get inputCreditCardNumber() { return $('#signup_cc_no') }
    get inputCVV() { return $('#signup_ccv') }
    get inputPostalCode() { return $('#signup_zip') }

    // Payment method expander div.paymethod-visa
    get toggleCreditCard() { return $('div.paymethod-visa') }
    get togglePaypal() { return $('div.paymethod-paypal') }
    get togglBBitCoin() { return $('div.paymethod-bitcoin') }
    get toggleOther() { return $('div.paymethod-giropay') }

    // Button
    get buttonJoinNow() { return $('div.paymethod-giropay') }

    // Links
    get linkLogo () { return $('a.nav-logo') }
    get linkFooterVPNMac () { return $('a=VPN for Mac') }
    get linkFooterVPNWindows () { return $('a=VPN for Windows') }
    // Methods

    // open () {
    //     return super.open('order');
    // }s

    async localisationValidation(data: any) {
        if(data.Title) {
            // console.log('Actual:' + await (await this.labelTitle).getText())
            // console.log('Expected:' + data.Title);
            expect(await this.labelTitle).toHaveTextContaining(data.Title);
        }

        if(data.TitlePara) {
            expect(await this.labelTitlePara).toHaveTextContaining(data.TitlePara);
        }
    }

    async selectLanguage(langauge: string) {
        await (await this.dropdownLangauge).click();
        let obj = (await (await this.dropdownLanguageOption).$$('a'));
        console.log(obj.length);
        for(let opt of obj) {
            let text = await opt.getText();
            // console.log('Value:' + text);
            if(text.includes(langauge)) {
                opt.click();
                // console.log('Value Selected');
                break;
            }
        }
    }

}

export default new OrderPage();