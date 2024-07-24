const { Before,After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber')
const { POmanager } = require('../../PageObject/PO_Manager');
const playwright = require('@playwright/test');
const { before } = require('node:test');
const { Stats } = require('fs');
const path = require('path');

Before(async function(){

    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.MainFile = new POmanager(this.page);
});

BeforeStep(function(){
    
});

AfterStep(async function({result}){

    if(result.status === Status.FAILED)
    {
        await this.page.screenshot({path: 'features/Screenshot/FailResult_SS.png'})
    }
});

After(async function(){

    console.log("Execution successfully done")
});