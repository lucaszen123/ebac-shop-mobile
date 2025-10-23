import { $ } from '@wdio/globals'

class ProfilePage {
    profileName(name){
        return $(`//android.widget.TextView[@text="${name}"]`)
    }
    
    get profileNameText(){
        return $('//*[contains(@text,"EBAC Cliente")]')
    }
}
 
export default new ProfilePage();