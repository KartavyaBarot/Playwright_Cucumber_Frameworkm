Feature: Ecommerce Validation

  Scenario: Placing Order
    Given login to with "kartavyabarot@yopmail.com" and "Test@1234" 
    When click on login button
    Then Veriy the Checkbox is visible or not




# Given('login to with {string} and {string}',{timeout: 3000}, async function (Uname, Pass) {

#     await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");

#     this.page.locator("//input[@id='username']").fill(Uname);
#     this.page.locator("//input[@id='password']").fill(Pass)
# });

# When('click on login button',async function () {
  
#   await this.page.locator("//input[@id='signInBtn']").click();
# });

# Then('Veriy the Checkbox is visible or not',async function () {
  
#   await expect(this.page.locator("//label[@for='terms']//span[1]")).toBeVisible();
# });