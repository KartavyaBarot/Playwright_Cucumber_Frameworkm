const { test, expect } = require('@playwright/test');
const { POmanager } = require('../PageObject/PO_Manager');
const dataset = JSON.parse(JSON.stringify(require('../Test_Data_File/Login_Test_Data.json')))

for (const data of dataset) {

    test(`@Smoke Client app login for ${data.ProductName}`, async ({ browser }) => {
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


        // Product Add To cart [Dashboard Page] 
        const dashboard = MainFile.getDeshboard();

        await dashboard.AddToCartProduct(data.ProductName);
        await dashboard.AddToCart()
        await dashboard.validation(); //Assertion


        // CheckOut Page    
        const checkout = MainFile.getCheckout();

        await checkout.GoToCheckOut();
        await checkout.CardDetails(
                                    data.CardNumber,
                                    data.Ex_Date,
                                    data.Ex_Month,
                                    data.CVV,
                                    data.Name,
                                    data.CouponCode
                                );
                                
        await checkout.ShipingInfo(data.CountyCode, data.CountryName);

        const expectedUsername = data.Username;
        await checkout.CheckOutPage_Assertion(expectedUsername); //Assertion


        // Place Order 
        const MyOrder = MainFile.getMyoreder();

        await MyOrder.Order();
        await MyOrder.OrderManue();

        await MyOrder.ViewOrder_Assertion(); //Assertion


    });
}


