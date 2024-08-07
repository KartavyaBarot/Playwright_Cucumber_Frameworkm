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
             
    }
    async AddToCartProduct(AddProduct)
    {

    this.AddProduct = AddProduct

    const ProductXpath = `//div // h5 //b[contains(.,'${this.AddProduct}')]/ancestor::div[contains(@class, 'card-body')]//button[text()=' Add To Cart']`;
    const ProductButton = this.page.locator(ProductXpath);
    await ProductButton.click();
   
    

    // const ProductTitels = await this.AllProductTitles.allTextContents(); 
    // //console.log(ProductTitels)

    // const ProcutsCount = await this.AllProduct.count(); 

    // for(let i=0; i<ProcutsCount; ++i)
    //     {
    //         const P = await this.AllProduct.nth(i).locator("b").textContent(); 
    //         if(P == this.AddProduct)            
    //             {
    //                 await this.AllProduct.nth(i).locator("text= Add To Cart").click();   //clik the add to cart button.
    //                 break;
    //             }
    //     }
    }

    async AddToCart()
    {
        await   this.CartBTN.click();
        
    }

    async validation(VerifyProduct)
        {
            await this.page.waitForTimeout(2500);
            
            const bool = await this.page.locator(`//h3[contains(., '${VerifyProduct}')]`).isVisible();
            //console.log(bool);
            expect(bool).toBeTruthy();  //Verify the product is available or not on cart page.
        }
    
}

module.exports = {Dashboard_Page}