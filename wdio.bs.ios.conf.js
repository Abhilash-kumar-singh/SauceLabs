const {config}= require('./wdio.conf')
const path = require('path');

config.specs=[
    './test/specs/ios.e2e.js'
];
config.services= ['browserstack'];
config.user='abhilashsingh_W8VPYC'
config.key='4EcpERwBXDhfhzEkvySx'
config.capabilities=[
    {
        "appium:platformName": "iOS",
        "appium:deviceName": "iPhone 15 Pro",
        "appium:platformVersion": "17",
        "appium:automationName": "XCUITest",
        "appium:app": 'bs://7ee8b6a8911b822f09c48a1c44a9181f923d4601',
        // "appium:udid": "896350B6-0927-4970-A0C9-F0ACE633607C",
        'bstack:options' : {
            "userName" : "abhilashsingh_W8VPYC",
            "accessKey" : "4EcpERwBXDhfhzEkvySx",
        }
    }
];
// config.port= 4726;

exports.config=config;