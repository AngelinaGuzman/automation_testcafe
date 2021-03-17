
import welcomePage from '../pages/welcomePage'
import loginPage from '../pages/loginPage'
import { InventoryPage } from '../pages/Inventory_Page'
import { ClientFunction } from 'testcafe'


let inventoryPage = null;

fixture('Logout from products page')
    .page`https://www.saucedemo.com/`
    .beforeEach(()=>{
    inventoryPage = new InventoryPage()
       
    })

test('Logout from product page', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")

    await t.click(inventoryPage.burgerButton)
    await t.click(inventoryPage.logoutLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/")
//  await t.expect(welcomePage.loginLogo.exists).ok()


})