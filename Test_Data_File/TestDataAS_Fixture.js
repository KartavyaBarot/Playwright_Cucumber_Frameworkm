const base = require('@playwright/test')

exports.fixturetest = base.test.extend(
    {
        TestData:{
                    Username : "kartavyabarot@yopmail.com",
                    Password : "Test@123",
                    ProductName : "ADIDAS ORIGINAL"
                }
    }
)