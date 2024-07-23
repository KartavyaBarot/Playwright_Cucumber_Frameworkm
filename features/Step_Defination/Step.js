const { Given, When, Then } = require('@cucumber/cucumber')
const {POmanager} = require('../../PageObject/PO_Manager');
const { test, expect, playwright } = require('@playwright/test');


Given('a login to Ecommerce application with {username} and {password}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const MainFile = new POmanager(page);

    // Log-in 
    const signin = MainFile.getLoginPage();
    await signin.goTo();
    await signin.validLogin(
                            data.Username,
                            data.Password
                        );
});


When('Add {string} to cart', async function (string) {
           // Write code here that turns the phrase above into concrete actions

    // Product Add To cart [Dashboard Page] 
    const dashboard = MainFile.getDeshboard();
    await dashboard.AddToCartProduct(data.ProductName);
    await dashboard.AddToCart();
});


Then('verify {string} is displayed in the cart', async function (string) {
           // Write code here that turns the phrase above into concrete actions

           await dashboard.VerifyProductIsDisplayed(data.ProductName);
         });


When('Enter valid details and place the Order', async function () {
           // Write code here that turns the phrase above into concrete actions

    const MyOrder = MainFile.getMyoreder();
    await MyOrder.Order();
    await MyOrder.OrderManue();
         });

Then('verify order is present in the OrderHistory page', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });