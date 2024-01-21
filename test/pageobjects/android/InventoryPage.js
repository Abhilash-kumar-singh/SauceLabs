const page= require('./page')
const utility= require('../../../Utility/Utility')

class InventoryPage extends page{
    get pageNameLocator(){
        return $("//android.view.ViewGroup[@content-desc='test-Cart drop zone']/android.view.ViewGroup//child::android.widget.TextView")
    }
    get allProductList(){
        return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]')
    }
    async getPageName(){
        await this.pageNameLocator.getText()
    }
    async clickOnProduct(name){
        const xpath= "//android.widget.TextView[@text='"+name+"']"
        while(!(await $(xpath).isDisplayed())){
            await utility.scrollVertical()
        }
        await $(xpath).click()
    }
    
}
module.exports= new InventoryPage();