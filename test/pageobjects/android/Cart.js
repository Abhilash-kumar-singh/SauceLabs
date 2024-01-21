const utility= require('../../../Utility/Utility')

class Cart{
    get cartButton(){
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
    }

    async goToCart(){
        await this.cartButton.click()
    }
    async scrollToCartItem(name){
        //const xpath= "//android.widget.TextView[@text='"+name+"']"
        const xpath= "//android.widget.TextView[@text='"+name+"']"
        while(!(await $(xpath).isDisplayed())){
            await utility.scrollVertical()
        }
    }
    async removeFromCart(name){
        const xpath= "//android.widget.TextView[@text='"+name+"']"
        const element = await $(xpath)
        await utility.swipeLeft(element)
        await $('//android.view.ViewGroup[@content-desc="test-Delete"]/android.view.ViewGroup').click()
    }   
}
module.exports= new Cart();
    