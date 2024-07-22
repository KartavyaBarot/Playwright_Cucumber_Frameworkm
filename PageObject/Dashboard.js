class Dashboard_Page
{
    constructor(page)
    {
        this.AllProduct = page.locator(".card-body");
        this.AllProductTitles = page.locator(".card-body b");  
        this.CartBTN = page.locator("//button[@routerlink='/dashboard/cart']");
        this.AddProduct = "ADIDAS ORIGINAL";
        this.CartBTN = page.locator("//button[@routerlink='/dashboard/cart']");
       
    }

    async AddToCartProduct(AddProduct)
    {
    const ProductTitels = await this.AllProductTitles.allTextContents(); 
    console.log(ProductTitels)

    const ProcutsCount = await this.AllProduct.count(); 

    for(let i=0; i<ProcutsCount; ++i)
        {
            /*if(await AllProduct.nth(i).locator("b").textContent() === AddProduct)
                {
                    await AllProduct.nth(i).locator("text= Add To Cart").click();
                    break;
                }*/

            const P = await this.AllProduct.nth(i).locator("b").textContent(); 
            if(P == AddProduct)            
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

    // async validation()
    //     {
    //         await this.page.locator("//ul[@class='cartWrap ng-star-inserted']").waitFor();   //It is wait for product should be loaded succesfully.
    
    //         const bool = await this.page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    //         expect(bool).toBeTruthy();  //Verify the product is available or not on cart page.
    //     }
    
}

module.exports = {Dashboard_Page}