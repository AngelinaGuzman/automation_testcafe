import { Selector} from 'testcafe'

class errorMissingMail{
    constructor(){
        this.errorMail = Selector('#checkout_info_container > div > form > h3')
    }
}
export default new errorMissingMail()
