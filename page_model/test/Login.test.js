import loginPage from '../pages/loginPage'

fixture('Login testing')
.page `https://www.saucedemo.com/`



test('Using can login using valid credentials', async t => {
     await t
     .typeText(loginPage.usernameField,'standard_user')
     .typeText(loginPage.passwordField,'secret_sauce')
     .click(loginPage.loginButton)

     await t.expect(loginPage.labelProduct.exists).ok()


})

test('Using can not login using invalid credentials', async t => {
    await t
    .typeText(loginPage.usernameField,'fulanito_user')
    .typeText(loginPage.passwordField,'sec_sauce')
    .click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.exists).ok()

})

//testcafe chrome './page_model/test/Login.test.js'