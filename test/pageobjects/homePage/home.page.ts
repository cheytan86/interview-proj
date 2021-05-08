import Page from '../page';

class HomePage extends Page {

    //
    get labelTitle() { return $('.column-heading h1') }

    // button
    get buttonGetExpressVPN() { return $('.column-cta a') }
}

export default new HomePage();