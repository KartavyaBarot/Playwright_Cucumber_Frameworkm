Feature: Ecommerce Validation
  @Mainfile

  Scenario Outline: Scenario Outline name: Placing Order

    Given a login to Ecommerce application with "<UserName>" and "<Passwrod>"
    When Add '<ProductName>' to cart
    Then verify '<VerifyProductName>' is displayed in the cart

    When Enter valid card details '<CardNumber>','<CardEX_Month>','<CardEX_Year>','<CVV>','<Name>','<CouponCode>','<CountryCode>','<CountryName>' details and place the Order
    Then verify order is present in the OrderHistory page

  Examples:

    | UserName                  | Passwrod | ProductName     | VerifyProductName | CardNumber          | CardEX_Month | CardEX_Year | CVV | Name | CouponCode         | CountryCode | CountryName |
    | kartavyabarot@yopmail.com | Test@123 | ADIDAS ORIGINAL | ADIDAS ORIGINAL   | 4242 4242 4242 4242 | 05           | 25          | 121 | Sam  | rahulshettyacademy | Ind         | India       |
    | shetty@yopmail.com        | Test@123 | IPHONE 13 PRO   | IPHONE 13 PRO     | 4242 4242 4242 4242 | 02           | 27          | 123 | Sam  | rahulshettyacademy | can         | Canada      |
      
      