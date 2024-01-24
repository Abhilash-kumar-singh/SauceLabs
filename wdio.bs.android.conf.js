const {config}= require('./wdio.conf')
require('dotenv').config()

config.hostname='hub.browserstack.com'
config.specs=[
    './test/specs/test.e2e.js'
];
config.services= [
    [
      'browserstack',
      {
        app: 'bs://6fa5b8a2e348368a2cb18dc62818ecc960ee8be0',
        buildIdentifier: "1.0",
        browserstackLocal: true
      },
    ]
  ],
config.user=process.env.BS_USER
config.key=process.env.BS_KEY
config.capabilities=[{
    'bstack:options': {
      deviceName: 'Google Pixel 3',
      platformVersion: '10.0',
      platformName: 'android',
    }
  }],
config.commonCapabilities={
  'bstack:options': {
    projectName: "Sauce labs",
    buildName: 'browserstack build',
    sessionName: 'BStack parallel webdriverio-appium',
    debug: true,
    networkLogs: true
  }
},

exports.config=config;