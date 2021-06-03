const puppeteer=require("puppeteer");
const placeOrder=require('./PlaceOrder.js');
const sellStock = require("./SellStock.js");

let UserId="sagedak492@edmondpt.com";
let pass="Sagedak492"
module.exports=login;


async function login(loginTab,Buystocks,sellStocks){
    try{
        await loginTab.goto("https://demo.etnatrader.com");
        await loginTab.waitForSelector('#Login.default-input-text',{visible:true});
        await loginTab.type("#Login.default-input-text",UserId);
        await loginTab.type("#Password.default-input-text",pass);
        await loginTab.click(".logon-button");
        await loginTab.waitForTimeout(8000);
        //Buying stocks 
        for(let i=0;i<Buystocks.length;i++)
        {
            await loginTab.waitForTimeout(2000);
           await placeOrder(loginTab,Buystocks[i],i);
        }
        //selling stocks 
        for(let i=0;i<sellStocks.length;i++)
        {
           await sellStock(loginTab,sellStocks[i]);
           await loginTab.waitForTimeout(2000);
        }
    } 
    catch(error)
    {
     await console.log("LOGIN UNSUCESSFULL!!");
    }
}