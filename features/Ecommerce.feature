Feature: Ecommerce Validation

  Scenario: Placing Order
    Given a login to Ecommerce application with "kartavyabarot@yopmail.com" and "Test@123" 
    When Add 'ADIDAS ORIGINAL' to cart
    Then verify 'ADIDAS ORIGINAL' is displayed in the cart

   When Enter valid card details '4242 4242 4242 4242','05','25','121','Test Automation','rahulshettyacademy','Ind','India' details and place the Order
    Then verify order is present in the OrderHistory page