const {config}= require('./wdio.conf')
const path = require('path');

config.specs=[
    './test/specs/ios.e2e.js'
];
config.capabilities=[
    {
        platformName: 'Android',
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion':'11',
        'appium:automationName': 'UiAutomator2',
        'appium:app':path.join(process.cwd(),"./app/SauceLabs.apk"),
        'appium:appActivity': '.SplashActivity',
        'appium:appPackage': 'com.swaglabsmobileapp',
        port:4000,
        "appium:systemPort":4001
    }
];
// config.port= 4724;

exports.config=config;