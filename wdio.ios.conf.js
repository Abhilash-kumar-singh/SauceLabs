const {config}= require('./wdio.conf')
const path = require('path');

config.specs=[
    './test/specs/ios.e2e.js'
];
config.capabilities=[
    {
        "appium:platformName": "iOS",
        "appium:deviceName": "iPhone 15 Pro",
        "appium:platformVersion": "17.2",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(),"./app/SauceLabs.app"),
        "appium:udid": "896350B6-0927-4970-A0C9-F0ACE633607C",
        "appium:wdaLaunchTimeout": "100000"
      }
];
config.port= 4726;

exports.config=config;