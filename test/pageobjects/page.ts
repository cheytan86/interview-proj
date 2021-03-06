/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        // return browser.url(`https://www.expressvpn.com/${path}`)
        browser.maximizeWindow();
        return browser.url(`https://www.expressvpn.com/${path}`);
    }

    wait(seconds: number) {
        const start = new Date().getTime();
        let end = start;
        while(end < start + seconds*1000) {
            end = new Date().getTime();
        }
    }
}
