const { test, expect } = require('@playwright/test');
class CheckOut
{
    constructor(page)
    {
        this.page = page;
        this.CheckoutBTN = page.locator("//button[normalize-space()='Checkout']");

        // Add Credit Card details:
        this.CreditCardNumber = page.locator("//input[@value='4542 9931 9292 2293']");
        this.CardEXdate = page.locator("//body//app-root//select[1]");
        this.CardEXmonth = page.locator("//body//app-root//select[2]");
        this.CardCVV = page.locator("//div[@class='payment__cc']//div[2]//input[1]");
        this.CardHolderName = page.locator("(//input[@type='text'])[3]");
        this.ApplyCoupon = page.locator("//input[@name='coupon']");
        this.ApplyCouponBTN = page.locator("//button[@class='btn btn-primary mt-1']");

        // Add Shipping Information:
        this.Country = page.locator("//input[@placeholder='Select Country']");
        this.CountryDD = page.locator(".ta-results");
        this.SIemail = page.locator(".user__name [type=text]");

        //validation
        this.getmail = page.locator("label[type='text']");

    }

    async GoToCheckOut()
    {
        await this.CheckoutBTN.click();
        await this.page.waitForLoadState('networkidle');
    }

    async CardDetails(CardNumber,Ex_Date,Ex_Month,CVV,Name,CouponCode)
    {
        await this.CreditCardNumber.fill(CardNumber);
        await this.CardEXdate.selectOption({ label: Ex_Date });
        await this.CardEXmonth.selectOption({ label: Ex_Month });
        await this.CardCVV.fill(CVV);
        await this.CardHolderName.fill(Name);
        await this.ApplyCoupon.fill(CouponCode);

        await this.ApplyCouponBTN.click();
        await this.page.waitForTimeout(5000);
        await expect(this.page.locator("//p[text()='* Coupon Applied']")).toHaveText("* Coupon Applied");       
    }

    async ShipingInfo(Code,Country)
    {
        await this.Country.pressSequentially(Code); 
        await this.CountryDD.waitFor();

        const CountryoptionsCount = await this.CountryDD.locator("button").count();

        for(let i=0; i<CountryoptionsCount; ++i)
        {
            const text = await this.CountryDD.locator("button").nth(i).textContent();

            if(text.trim() === Country)
                {
                    await this.CountryDD.locator("button").nth(i).click();
                    break;
                }
        }

    }

    async CheckOutPage_Assertion(expectedUsername)
    {
        const emailElement = await this.getmail.textContent();
        expect(emailElement).toBe(expectedUsername);
    }
}

module.exports = {CheckOut}