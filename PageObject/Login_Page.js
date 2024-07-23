class LoginPage
{
    constructor(page)
    {
        this.page = page; 
        this.Email = page.locator("#userEmail");
        this.Pass =  page.locator("#userPassword");
        this.Login = page.locator("#login");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    async validLogin(Username,Password)
    {
        await this.Email.fill(Username);
        await this.Pass.fill(Password);
        await this.Login.click();
        await this.page.waitForLoadState('networkidle');
    }

}



module.exports = {LoginPage}