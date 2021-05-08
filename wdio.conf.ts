import { generateHtmlReport } from './utils/utils';
import { globalVars} from './utils/globalvar';
const appRootDir = require('app-root-dir').get();
console.log(appRootDir);
export const config: WebdriverIO.Config = {

    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    // Specify Test Files
    specs: [
        './test/specs/**/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [
        {
    
            // grid with only 5 firefox instances available you can make sure that not more than
            // 5 instances get started at a time.
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        // {
        //     maxInstances: 2,
        //     browserName: 'firefox'
        // },
        // {
        //     maxInstances: 2,
        //     browserName: 'safari'
        // },
        // {
        //     maxInstances: 1,
        //     browserName: 'safari',
        //     platformName: 'ios',
        // }
    ],

    logLevel: 'warn', //'info',

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: [
        [
            'selenium-standalone',
            {
                logPath: 'logs'
            }
        ],
    ],

    // services: ['chromedriver','browserstack'],
    
    framework: 'mocha',
    
    reporters: [
        'dot',
        ['allure', {
            outputDir: 'allure-results',
            // disableWebdriverStepsReporting: true,
            // disableWebdriverScreenshotsReporting: true,
        }],
        ['mochawesome',{ 
            outputDir:  appRootDir + '/' +globalVars.mochaReportFolder,
            outputFileFormat: function(opts:any) { 

                return `results-${opts.cid}.${opts.capabilities.browserName}.json`
            }
        }]
    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        reporterOptions: {
            reportFilename: 'result',
            quiet: true,
            code: false,
          }
    },

    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    },
 
    //
    // =====
    // Hooks
    // =====
    // onPrepare: function (config, capabilities) {
    // },


    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
        }
    },

    onComplete: function(exitCode, config, capabilities, results) {
        generateHtmlReport();
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
