class Utility{
    Utility(){
        this.driver=driver
    }
    async tapOnElement(element){
        await element.touchAction('tap')
    }
    async wait(){
        await driver.touchAction([
            {action:'wait',ms:10000}
        ])
    }
    async scrollVertical(){
        const viewportSize= await driver.getWindowRect()
        const fromX= (viewportSize.height)/2
        const fromY= (viewportSize.width)/2
        await driver.touchAction([
            {action:'press',x:fromX,y:fromY},
            {action:'wait',ms:'2000'},
            {action:'moveTo',x:fromX,y:50},
            {action:'release'}
        ])
    }
    async swipeLeft(element){
        const width= await element.getSize('width')
        const height= await element.getSize('height')
        const x= await element.getLocation('x')
        const y= await element.getLocation('y')
        const fromX= Math.floor(width/2) + x
        const fromY= Math.floor(height/2) + y
        const toX= x+5
        await driver.touchAction([
            {action:'press',x:fromX,y:fromY},
            {action:'wait',ms:'2000'},
            {action:'moveTo',x:toX,y:fromY},
            {action:'release'}
        ])
    }
    async scrollTextToView(text){
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("'+text+'")')
    }
}
module.exports= new Utility();