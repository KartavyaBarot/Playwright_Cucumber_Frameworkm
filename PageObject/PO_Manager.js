const {LoginPage} = require('./Login_Page')
const {Dashboard_Page} = require('./Dashboard')
const {CheckOut} = require('./CheckoutPage')
const {place_order} = require('./PlaceOrder')

class POmanager
{
    constructor(page)
    {
        this.page = page

        this.signin = new LoginPage(this.page);
        this.dashboard = new Dashboard_Page(this.page);
        this.checkout = new CheckOut(this.page);
        this.MyOrder = new place_order(this.page)
    }

    getLoginPage()
    {
        return this.signin;
    }

    getDeshboard()
    {
        return this.dashboard;
    }

    getCheckout()
    {
        return this.checkout;
    }

    getMyoreder()
    {
        return this.MyOrder;
    }
}

module.exports = {POmanager}