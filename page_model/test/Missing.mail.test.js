import loginPage from '../pages/loginPage'
import { InventoryPage } from '../pages/Inventory_Page'
import { ClientFunction } from 'testcafe'
import { CartPage } from '../pages/Cart_Pages'
import { CheckOutStepOne } from '../pages/Checkout_StepOne'


let inventoryPage = null;
let cartPage = null;
let checkOutStepOne = null;

fixture('Missing Mail')
    .page`https://www.saucedemo.com/`
    .beforeEach(()=>{
    inventoryPage = new InventoryPage()
    cartPage = new CartPage()
    checkOutStepOne = new CheckOutStepOne()
       
    })

test('Continuo with missing mail information', async t => {
    await t.typeText(loginPage.usernameField, 'standard_user')
    await t.typeText(loginPage.passwordField, 'secret_sauce')
    await t.click(loginPage.loginButton)

    const getWindowLocation = ClientFunction(() => window.location.href)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/inventory.html")
    
    await t.click(inventoryPage.shoppingCartLink)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/cart.html")

    await t.click(cartPage.checkoutButton)

    await t.expect(await getWindowLocation()).eql("https://www.saucedemo.com/checkout-step-one.html")


    await t.click(checkOutStepOne.continuoButton)


    await t.expect(checkOutStepOne.errorMessage.innerText).eql('Error: First Name is required')
    
})