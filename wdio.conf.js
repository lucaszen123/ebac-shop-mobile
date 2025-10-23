import AppiumService from "@wdio/appium-service";

export const config = {
    
    //runner: 'local',
    //port: 4723,
    
    user: 'oauth-lsentinger-45c6a',
    key: 'feb10fe2-9c24-47f1-8781-716cbb1e1734',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    
    specs:[
        './test/specs/**/*.js'
    ],   
    maxInstances: 1, 
    capabilities: [
        //  {
        //  platformName: 'Android',
        // 'appium:deviceName': 'EBAC',
        // 'appium:platformVersion': '9.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:apppWaitActivity': '.MainActivity',
        // 'appium:disableIdLocatorAutoCompletion': true
    
    //}
            {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutoCompletion': true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Test',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.0.0'
            },
        },


],
    
    logLevel: 'info',   
    waitforTimeout: 10000,    
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,   
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}