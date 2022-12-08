// load env variables - this should be the first line of config
require('dotenv-extended').config({
    path: './tests/acceptance/config/codecept.dev.env',
    defaults: './tests/acceptance/config/codecept.env',
});
require('ts-node/register');

const { configure, cleanReports } = require('codeceptjs-configure');
const REPORT_OUTPUT_DIR = './tests/acceptance/report';

let conf = {
    name: 'Codeceptjs BDD Acceptance Tests',

    repository: 'https://github.com/salesforce/codeceptjs-bdd',

    output: REPORT_OUTPUT_DIR,

    bootstrap: (callback) => {
        cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback });
    },

    helpers: {
        driver_helper: {
            require: './tests/acceptance/helpers/driver.helper',
        },
    },

    // add more configuration as required
    rerun: {
        // how many times all tests should pass
        minSuccess: 2,

        // how many times to try to rerun all tests
        maxReruns: 4,
    },
};

/**
 * This is an example of passing user-specific Sauce Browser. Kept empty intentionally, but you can add your required custom Sauce Browsers.
 * To configure Saucelabs Browser, pls take a look codeceptjs-saucelabs/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */

exports.config = configure.create(conf);
