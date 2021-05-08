import Page from '../page';

class VPNMacPage extends Page {

    // label
    get labelTitle() { return $('.column-content h1') }

    // button
    get buttonDownload() { return $('a.js-cta-download') }

}

export default new VPNMacPage();