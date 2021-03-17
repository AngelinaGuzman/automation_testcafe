import { Selector} from 'testcafe'

class addMultipleItem{
    constructor(){
        this.containerShoping= Selector('#shopping_cart_container > a > span')
        this.containerList= Selector('#cart_contents_container > div > div.cart_list')

    }
}
export default new addMultipleItem()