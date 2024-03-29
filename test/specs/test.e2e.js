const { expect } = require('@wdio/globals')
const loginPage= require('../pageobjects/android/LoginPage')
const inventoryPage= require('../pageobjects/android/InventoryPage')
const productDescriptionPage= require('../pageobjects/android/ProductDescriptionPage')
const cartPage= require('../pageobjects/android/Cart')
const nav= require('../pageobjects/android/SideNav')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.login("standard_user","secret_sauce")
        const result= await inventoryPage.getPageName()
        await driver.pause(2000)
        await inventoryPage.clickOnProduct("Sauce Labs Fleece Jacket")
        await driver.pause(3000)
        await productDescriptionPage.addToCart()
        await nav.clickOnHamburgerIcon()
        await nav.clickOnNavOptionByName("ALL ITEMS")

        await inventoryPage.clickOnProduct("Sauce Labs Onesie")
        await driver.pause(1000)
        await productDescriptionPage.addToCart()
        await driver.pause(1000)
        await cartPage.goToCart()
        await cartPage.scrollToCartItem("Sauce Labs Onesie")
        await driver.pause(1000)
        await cartPage.removeFromCart("Sauce Labs Onesie")
    })
})

