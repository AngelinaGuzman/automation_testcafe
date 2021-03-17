import loginPage from '../pages/loginPage'
import { InventoryPage } from '../pages/Inventory_Page'
import { ClientFunction } from 'testcafe'


let inventoryPage = null;

fixture('Navigate Shoping cart')
    .page`https://www.saucedemo.com/`
    .beforeEach(()=>{
    inventoryPage = new InventoryPage()
       
    })

test('Add a multiple items to the shopping cart', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.getInventoryButton(1))
    await t.click(inventoryPage.getInventoryButton(3))
    await t.click(inventoryPage.getInventoryButton(5))

    await t.expect(inventoryPage.shoppingCartLink.find(".shopping_cart_badge").innerText).eql("3")
})