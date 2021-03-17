import { Selector} from 'testcafe'

class filledInformation{
    constructor(){
        this.filledInfo = Selector('#checkout_summary_container')
    }
}
export default new filledInformation()