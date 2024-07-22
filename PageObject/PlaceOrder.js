class place_order
{
    constructor(page)
    {
        this.page = page;

        //Place Order:
        this.PlaceOrderBTN = page.locator("//a[normalize-space()='Place Order']");
        this.OrderID = page.locator('.em-spacer-1 .ng-star-inserted');

        //Go to Orders:
        this.OrdersMenu = page.locator("//button[@routerlink='/dashboard/myorders']");
        this.AllID = page.locator(".ng-star-inserted tr");
       
    }


    async Order()
    {
        await this.PlaceOrderBTN.click();
        await this.page.waitForTimeout(5000);

        //await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

        const ID = await this.OrderID.textContent();
        const NEWID = await ID.split("|")
        const id = NEWID[1].trim();
        this.id = id
        console.log(this.id)

        await this.OrdersMenu.click();
    }

    async OrderManue()
    {

        const rowCount = await this.AllID.count();

        for(let i=0; i<rowCount; ++i)
            {
                const final = await this.AllID.nth(i).locator("th");
                const thcount = await final.count();
                
                for(let j=0; j<thcount; ++j)
                    {
                        if(await final.nth(j).textContent() === this.id)
                            {
                                await this.AllID.nth(i).locator("//button[text()='View']").click();
                                break;
                            }
                    }
            }
    
    }
}

module.exports = {place_order}