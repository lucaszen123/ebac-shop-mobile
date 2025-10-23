import { $, driver } from '@wdio/globals'

class HomePage{
    
    async waitForMainScreen(){
        await driver.pause(10000);
        
        let source = await driver.getPageSource();
        let attempts = 0;
        const maxAttempts = 3;
        
        while (attempts < maxAttempts && !source.includes('tab-') && !source.includes('clickable="true"')) {
            try {
                await driver.touchAction({
                    action: 'tap',
                    x: 540,
                    y: 900
                });
            } catch (error) {
                // Ignora erros de toque na tela
            }
            
            await driver.pause(5000);
            source = await driver.getPageSource();
            attempts++;
        }
        
        return source;
    }

    async openMenu(menu){
        await this.waitForMainScreen();
        
        const selectors = [
            `//android.widget.TextView[@resource-id="tab-${menu}"]`,
            `//*[@resource-id="tab-${menu}"]`,
            `//*[contains(@resource-id,"tab-${menu}")]`,
            `//*[contains(@resource-id,"${menu}")]`,
            `//android.widget.TextView[contains(@text,"${menu}")]`,
            `//android.widget.TextView[contains(@text,"Profile")]`,
            `//*[@content-desc="${menu}"]`,
            `//*[contains(@content-desc,"${menu}")]`,
            `//android.widget.ImageView[contains(@resource-id,"${menu}")]`,
            `//android.widget.FrameLayout[contains(@resource-id,"${menu}")]`,
            `//*[@clickable="true" and contains(@resource-id,"${menu}")]`,
            `//*[@clickable="true" and contains(@content-desc,"${menu}")]`,
            `//android.widget.TextView[@clickable="true" and contains(@text,"${menu}")]`
        ];
        
        for(const selector of selectors){
            try {
                const menuElement = await $(selector);
                await menuElement.waitForDisplayed({ timeout: 2000 });
                await menuElement.click();
                return;
            } catch (error) {
                continue;
            }
        }
        
        throw new Error(`Menu '${menu}' não encontrado`);
    }

}

export default new HomePage();
