const { expect } = require('@wdio/globals')
const inventoryPage= require('../pageobjects/ios/InventoryPage')
const sortStrategies= require('../../Utility/constants/SortStrategies')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        expect(await inventoryPage.getScreenName()).toEqual("Products")
        let allItemsNames= await inventoryPage.getAllItemsName()
        allItemsNames.forEach(ele=>{
            console.log(ele)
        })
        expect(allItemsNames).toHaveLength(6)
        console.log(await driver.isAndroid)
        //await inventoryPage.clickOnProduct("Sauce Labs Onesie")
        await inventoryPage.sortItem(sortStrategies.DES_NAME)
        allItemsNames= await inventoryPage.getAllItemsName()
        const descendingOrderName= allItemsNames.slice().sort((a,b)=> b.localeCompare(a))
        expect(allItemsNames).toEqual(descendingOrderName)
    })
    it("Generic commands",async ()=>{
        expect(await inventoryPage.getScreenName()).toEqual("Products")
        let allItemsNames= await inventoryPage.getAllItemsName()
        allItemsNames.forEach(ele=>{
            console.log(ele)
        })
        expect(allItemsNames).toHaveLength(6)
        await driver.terminateApp('896350B6-0927-4970-A0C9-F0ACE633607C')
        await driver.pause()

        await driver.executeScript('mobile: launchApp', [{bundleId: '896350B6-0927-4970-A0C9-F0ACE633607C'}])
        await driver.pause(10000)
        // await driver.activateApp("896350B6-0927-4970-A0C9-F0ACE633607C")
        // expect(await inventoryPage.getScreenName()).toEqual("Products")
        // allItemsNames= await inventoryPage.getAllItemsName()
        // allItemsNames.forEach(ele=>{
        //     console.log(ele)
        // })
        // expect(allItemsNames).toHaveLength(6)
    })
})

