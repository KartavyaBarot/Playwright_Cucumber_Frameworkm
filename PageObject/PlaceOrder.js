const { test, expect } = require('@playwright/test');
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

       

        //Assertion
        this.getID = page.locator("//div[@class='col-text -main']");
       
    }


    async Order()
    {
        await this.PlaceOrderBTN.click();
    
        //await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

        const ID = await this.OrderID.textContent();
        const NEWID = await ID.split("|")
        const id = NEWID[1].trim();
        this.id = id
        //console.log(this.id)

        await this.OrdersMenu.click();
    }

    async OrderManue()
    {
        const ViewBTN = this.page.locator(`//tr[contains(., '${this.id}')]//button[text()='View']`);
        await ViewBTN.click();
        

        // this.ViewBTN = this.page.locator(`//tr[contains(., '${this.id}')]//button[text()='View']`);
        // await this.ViewBTN.click();
    
        // const rowCount = await this.AllID.count();

        // for(let i=0; i<rowCount; ++i)
        //     {
        //         const final = await this.AllID.nth(i).locator("th");
        //         const thcount = await final.count();
                
        //         for(let j=0; j<thcount; ++j)
        //             {
        //                 if(await final.nth(j).textContent() === this.id)
        //                     {
        //                         await this.AllID.nth(i).locator("//button[text()='View']").click();
        //                         break;
        //                     }
        //             }
        //     }
    
    
    }

    async ViewOrder_Assertion()
    {
        //console.log("Test fail assertion")

        const Getid = await this.getID.textContent();
        expect(this.id).toBe(Getid);
        //console.log("ViewOrder page Assertion")
     
    }
}

module.exports = {place_order}