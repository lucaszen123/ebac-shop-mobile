import { $ } from '@wdio/globals'

class LoginPage {
    get email(){
        return $('id:email');
    }
    
    get emailAlt(){
        return $('//android.widget.EditText[@content-desc="email" or @text="E-mail" or contains(@resource-id,"email")]');
    }
    
    get password(){
        return $('id:password');
    }
    
    get passwordAlt(){
        return $('//android.widget.EditText[@content-desc="password" or @text="Password" or contains(@resource-id,"password")]');
    }
    
    get btnLogin(){
        return $('~Login');
    }

    async login(email, password){
        // Tenta usar o seletor principal, depois o alternativo para email
        try {
            await this.email.waitForDisplayed({ timeout: 5000 });
            await this.email.setValue(email);
        } catch (error) {
            await this.emailAlt.waitForDisplayed({ timeout: 5000 });
            await this.emailAlt.setValue(email);
        }
        
        // Tenta usar o seletor principal, depois o alternativo para password
        try {
            await this.password.waitForDisplayed({ timeout: 5000 });
            await this.password.setValue(password);
        } catch (error) {
            await this.passwordAlt.waitForDisplayed({ timeout: 5000 });
            await this.passwordAlt.setValue(password);
        }
        
        await this.btnLogin.waitForDisplayed({ timeout: 5000 });
        await this.btnLogin.click();
    }
}
export default new LoginPage();