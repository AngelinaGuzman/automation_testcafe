import { Selector} from 'testcafe'

 export class logOut{

    constructor(){
        this.burgerButton = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('#shopping_cart_container .shopping_cart_link')
    }
}

