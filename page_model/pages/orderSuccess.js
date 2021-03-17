import { Selector} from 'testcafe'

class ordenSuccess{
    constructor(){
        this.imageponny = Selector('#checkout_complete_container > img')
    }
}
export default new ordenSuccess()
