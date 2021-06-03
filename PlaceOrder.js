module.exports=placeOrder;

async function placeOrder(orderTab,stockSymbol,count){
    try{
       await orderTab.waitForSelector(".autocompleter-input",{visible:true});
       await orderTab.waitForTimeout(3000);
       await orderTab.click(".autocompleter-input");
       await orderTab.waitForTimeout(1000);
       
       await orderTab.keyboard.down("Control");
       await orderTab.keyboard.press("A");
       await orderTab.keyboard.press("X");
       await orderTab.keyboard.up("Control");
       await orderTab.waitForTimeout(2000);
    
       await orderTab.type(".autocompleter-input",stockSymbol);
       await orderTab.waitForTimeout(2000);
       orderTab.click('.autocompleter-button');
       await orderTab.waitForTimeout(5000);
    
       //if(await count==0)
       //{
        await orderTab.waitForTimeout(1000);
        let checkBox=await orderTab.$$('.checkmark');
        await checkBox[0].click();
        await orderTab.waitForTimeout(3000);
    
       let clickTrade=await orderTab.$$(".chain-btn-wrapper .button-primary");
       await clickTrade[1].click();

       await orderTab.waitForTimeout(1000);
       await orderTab.click('.trade-ticket-verify-button');
    
       await orderTab.waitForTimeout(1000);
       let tradeBtn=await orderTab.$$('.button-ok-dialog');
       await tradeBtn[1].click();
    
       await orderTab.waitForTimeout(1000);
       let closeBtn=await orderTab.$$('.button-close-dialog');
       await closeBtn[1].click();
    }
    catch(error)
    {
        await console.log("BUYING "+stockSymbol+" Unsucessfull!!");
    }
}