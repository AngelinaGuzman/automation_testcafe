import { Selector} from 'testcafe'

class welcomePage{
    constructor(){
        this.loginLogo = Selector('.login_logo')
    }
}
export default new welcomePage()
