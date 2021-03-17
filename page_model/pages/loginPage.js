import {Selector} from 'testcafe'

class loginPage{

    constructor(){
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('.btn_action')
        this.errorMessage = Selector('#login_button_container > div > form > h3')
        this.labelProduct=Selector('.product_label')
    }
}
export default new loginPage()