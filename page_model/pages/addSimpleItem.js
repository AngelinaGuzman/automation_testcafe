import { Selector} from 'testcafe'

class addSimpleItem{
    constructor(){
        this.addItem = Selector('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_quantity')
    }
}
export default new addSimpleItem()