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
    get labelStep1Text() { return $('.step1 .step-heading')}
    get labelStep1Para() { return $('.step1 p') }
    get labelPlan1Tenure() { return $('#package_1 .plan-name') }
    get labelPlan1PerMonth() { return $('#package_1 .per-month')}
    get labelPlan1BillingInfo() { return $('#package_1 .billing-info')}
    get labelPlan130Day() { return $('#package_1 .thirty-day')}
    get labelPlan1Alert() { return $('#package_1 + div.alert-one-month')}
    get labelPlan2Tenure() { return $('#package_3 .plan-name') }
    get labelPlan2PerMonth() { return $('#package_3 .per-month')}
    get labelPlan2BillingInfo() { return $('#package_3 .billing-info')}
    get labelPlan230Day() { return $('#package_3 .thirty-day')}
    get labelPlan3Tenure() { return $('#package_2 .plan-name') }
    get labelPlan3PerMonth() { return $('#package_2 .per-month')}
    get labelPlan3BillingInfo() { return $('#package_2 .billing-info')}
    get labelPlan330Day() { return $('#package_2 .thirty-day')}


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
            console.log('Actual:' + await (await this.labelTitle).getText())
            console.log('Expected:' + data.Title);
            expect(await this.labelTitle).toHaveTextContaining(data.Title);
        }
        if(data.TitlePara) {
            expect(await this.labelTitlePara).toHaveTextContaining(data.TitlePara);
        }
        if(data.Step1Text) {
            expect(await this.labelStep1Text).toHaveTextContaining(data.Step1Text);
        }
        if(data.Step1Para) {
            expect(await this.labelStep1Para).toHaveTextContaining(data.Step1Para);
        }
        if(data.Plan1Tenure) {
            expect(await this.labelPlan1Tenure).toHaveTextContaining(data.Plan1Tenure);
        }
        if(data.Plan1PerMonth) {
            expect(await this.labelPlan1PerMonth).toHaveTextContaining(data.Plan1PerMonth);
        }
        if(data.Plan1BillingInfo) {
            expect(await this.labelPlan1BillingInfo).toHaveTextContaining(data.Plan1BillingInfo);
        }
        if(data.Plan130Day) {
            expect(await this.labelPlan130Day).toHaveTextContaining(data.Plan130Day);
        }
        if(data.Plan1SelectAlert) {
            // click on plan 1
            await (await this.containerMonthly).click();
            expect(await this.labelPlan130Day).toHaveTextContaining(data.Plan1SelectAlert);
        }
        if(data.Plan2Tenure) {
            expect(await this.labelPlan2Tenure).toHaveTextContaining(data.Plan2Tenure);
        }
        if(data.Plan2PerMonth) {
            expect(await this.labelPlan2PerMonth).toHaveTextContaining(data.Plan2PerMonth);
        }
        if(data.Plan2BillingInfo) {
            expect(await this.labelPlan2BillingInfo).toHaveTextContaining(data.Plan2BillingInfo);
        }
        if(data.Plan230Day) {
            expect(await this.labelPlan230Day).toHaveTextContaining(data.Plan230Day);
        }
        if(data.Plan3Tenure) {
            expect(await this.labelPlan3Tenure).toHaveTextContaining(data.Plan3Tenure);
        }
        if(data.Plan2PerMonth) {
            expect(await this.labelPlan3PerMonth).toHaveTextContaining(data.Plan3PerMonth);
        }
        if(data.Plan3BillingInfo) {
            expect(await this.labelPlan3BillingInfo).toHaveTextContaining(data.Plan3BillingInfo);
        }
        if(data.Plan330Day) {
            expect(await this.labelPlan330Day).toHaveTextContaining(data.Plan330Day);
        }
    }

    async selectLanguage(langauge: string) {
        await (await this.dropdownLangauge).click();
        await this.wait(1);
        let obj = (await (await this.dropdownLanguageOption).$$('a'));
        console.log(obj.length);
        for(let opt of obj) {
            let text = await opt.getText();
            // console.log('Value:' + text);
            if(text.includes(langauge)) {
                await opt.click();
                // console.log('Value Selected');
                break;
            }
        }
    }

}

export default new OrderPage();