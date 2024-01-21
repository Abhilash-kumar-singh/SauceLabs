class SideNav{
    get hamburgerIcon(){
        return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView')
    }

    async clickOnHamburgerIcon(){
        await this.hamburgerIcon.click()
    }
    async clickOnNavOptionByName(name){
        const xpath= "//android.widget.TextView[@text='"+name+"']"
        await $(xpath).click()
    }
}

module.exports= new SideNav();