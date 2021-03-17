import { Selector} from 'testcafe'

class navigateYourCart{
    constructor(){
        this.yourCart = Selector('#contents_wrapper > div.subheader')
    }
}
export default new navigateYourCart()
