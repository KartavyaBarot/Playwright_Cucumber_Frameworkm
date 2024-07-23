const { test, expect } = require('@playwright/test');
class Dashboard_Page
{
    constructor(page)
    {
        this.page = page;
        this.AllProduct = page.locator(".card-body");
        this.AllProductTitles = page.locator(".card-body b");  
        this.CartBTN = page.locator("//button[@routerlink='/dashboard/cart']");
        //this.AddProduct = "ADIDAS ORIGINAL";
        this.Mycartvalidation = page.locator("//div[@class='wrap cf']");
        
    }

    async AddToCartProduct(AddProduct)
    {

    this.AddProduct = AddProduct

    const ProductTitels = await this.AllProductTitles.allTextContents(); 
    //console.log(ProductTitels)

    const ProcutsCount = await this.AllProduct.count(); 

    for(let i=0; i<ProcutsCount; ++i)
        {
            const P = await this.AllProduct.nth(i).locator("b").textContent(); 
            if(P == this.AddProduct)            
                {
                    await this.AllProduct.nth(i).locator("text= Add To Cart").click();   //clik the add to cart button.
                    break;
                }
        }
    }

    async AddToCart()
    {
        await   this.CartBTN.click();
        
    }

    async validation()
        {
            //console.log("Check Checkout page product name assertion")
            const bool = await this.page.locator("h3:has-text('"+this.AddProduct+"')").isVisible();
            //console.log(bool);
            expect(bool).toBeTruthy();  //Verify the product is available or not on cart page.
        }
    
}

module.exports = {Dashboard_Page}