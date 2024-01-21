const utility= require('../../../Utility/Utility')

class ProductDescriptionPage{
    get addToCartButton(){
        return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]')
    }

    async addToCart(){
        while(!(await this.addToCartButton.isDisplayed())){
            await utility.scrollVertical()
        }
        await this.addToCartButton.click()
    }
}
module.exports= new ProductDescriptionPage();