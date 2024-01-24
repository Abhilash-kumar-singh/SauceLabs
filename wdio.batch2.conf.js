const {config}= require('./wdio.conf')
const path = require('path');

config.specs=[
    './test/specs/test.e2e.js'
];
config.services=['appium']
config.capabilities=[
    {
        platformName: 'Android',
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion':'11',
        'appium:automationName': 'UiAutomator2',
        'appium:app':path.join(process.cwd(),"./app/SauceLabs.apk"),
        'appium:appActivity': '.SplashActivity',
        'appium:appPackage': 'com.swaglabsmobileapp',
        
    },
    {
        "platformName": "Android",
        "appium:platformVersion": "10",
        "appium:app": path.join(process.cwd(),"./app/SauceLabs.apk"),
        "appium:deviceName": "Nexus 5",
        "appium:automationName": "UiAutomator2",
        "appium:appActivity": ".SplashActivity",
        "appium:appPackage": "com.swaglabsmobileapp",
        
    }
];
config.port= 4723;

exports.config=config;