import { generateHtmlReport } from './utils/utils';
import { globalVars} from './utils/globalvar';
const appRootDir = require('app-root-dir').get();
console.log(appRootDir);
export const config: WebdriverIO.Config = {

    user: 'chetanmalhotra1',
    key: 'uzePqxzJ87YVVDQYYBbc',

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
            acceptInsecureCerts: true,
            name: 'single_test',
            build: 'first-webdriverio-browserstack-build'
        },
    ],

    logLevel: 'warn', //'info',
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
        ['browserstack', {
            browserstackLocal: true
        }]
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
