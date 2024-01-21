const utility= require('../../../Utility/Utility')
const sortStrategies= require('../../../Utility/constants/SortStrategies')

class InventoryPage{
    get pageHeadBanner(){
        const banner= '**/XCUIElementTypeStaticText[`label == "Products"`]'
        return $(`-ios class chain:${banner}`)
    }
    get allItemsName(){
        return $$('//XCUIElementTypeStaticText[@name="store item text"]')
    }
    get sortMenuButton(){
        return $('-ios predicate string:name == "sort button"')
    }

    async getScreenName(){
        return await this.pageHeadBanner.getText()
    }
    async getAllItemsName(){
        let nameList=[]
        for(const item of (await this.allItemsName)){
            nameList.push(await item.getText())
        }
        return nameList;
    }
    async clickOnProduct(name){
        const xpath= 'label == "'+name+'" AND name == "store item text"'
        while(!(await (await $(`-ios predicate string:${xpath}`)).isDisplayed())){
            await utility.scrollVertical()
        }
        await (await $(`-ios predicate string:${xpath}`)).click()
    }
    async sortItem(sort){
        await (await this.sortMenuButton).click()
        await $('//XCUIElementTypeStaticText[@name="'+sort+'"]').click()
    }
}

module.exports= new InventoryPage();