class Page{
    async getText(locator){
        return await locator.getText()
    }
}
module.exports= Page