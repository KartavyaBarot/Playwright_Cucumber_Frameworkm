const { Given, When, Then } = require('@cucumber/cucumber')
const { POmanager } = require('../../PageObject/PO_Manager');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');



Given('a login to Ecommerce application with {string} and {string}',{timeout: 15000}, async function (Username, Password) {
 
  this.MyUsername = Username;
  // Log-in 
  const signin = this.MainFile.getLoginPage();
  await signin.goTo();
  await signin.validLogin(this.MyUsername, Password);
  
});

When('Add {string} to cart', async function (ProductName) {
  this.dashboard = this.MainFile.getDeshboard();

  await this.dashboard.AddToCartProduct(ProductName);
  await this.dashboard.AddToCart();
});


Then('verify {string} is displayed in the cart', async function (ProductVerify) {

    await this.dashboard.validation(ProductVerify); //Assertion

});


When('Enter valid card details {string},{string},{string},{string},{string},{string},{string},{string} details and place the Order', {timeout: 10000}, // Increase timeout for this step
  async function (CardNumber, Ex_Date, Ex_Month, CVV, Name, CouponCode, CountyCode, CountryName) {
  // CheckOut Page    
  const checkout = this.MainFile.getCheckout();

  await checkout.GoToCheckOut();
  await checkout.CardDetails(CardNumber, Ex_Date, Ex_Month, CVV, Name, CouponCode);
  await checkout.ShipingInfo(CountyCode, CountryName);

  const expectedUsername = this.MyUsername;
  await checkout.CheckOutPage_Assertion(expectedUsername); //Assertion

  // Place Order 
  this.MyOrder = this.MainFile.getMyoreder();

  await this.MyOrder.Order();
  await this.MyOrder.OrderManue();
});

Then('verify order is present in the OrderHistory page',{timeout: 10000}, async function () {
  
  await this.MyOrder.ViewOrder_Assertion(); //Assertion
  
});