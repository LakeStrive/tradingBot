module.exports=sellStock;

async function sellStock(orderTab,stockSymbol){
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
      await orderTab.waitForTimeout(6000);
    
      
      await orderTab.waitForTimeout(1000);
      let checkBox=await orderTab.$$('.checkmark');
      await checkBox[0].click();
      await orderTab.waitForTimeout(5000);
      

     /*
      // Select Sell option rather than default buy 
      await orderTab.click(".selectBox.toolbar-control.select.custom-select.verifiableField.actionStock.selectBox-dropdown");
      //let clkSell=await orderTab.$$('a[title="Sell"]');
      //await orderTab.waitForTimeout(4000);
      //await clkSell[2].click();
      await orderTab.keyboard.press('ArrowDown');
      await orderTab.keyboard.press("Enter");*/

      await orderTab.waitForTimeout(1000);
      let clickTrade=await orderTab.$$(".chain-btn-wrapper .button-primary");
      await clickTrade[1].click();
      
      let selectType=await orderTab.$$(".actionStock-td");
      await selectType[2].click();
      await orderTab.keyboard.press('ArrowDown');
      await orderTab.keyboard.press("Enter");
      
      await orderTab.waitForTimeout(1000);
      await orderTab.click('.trade-ticket-verify-button');
    
      await orderTab.waitForTimeout(1000);
      let tradeBtn=await orderTab.$$('.button-ok-dialog');
      await tradeBtn[1].click();
    
      await orderTab.waitForTimeout(1000);
      let closeBtn=await orderTab.$$('.button-close-dialog');
      await closeBtn[1].click();
    }
    catch(error){
        await console.log("SELLING "+stockSymbol+" Unsucessfull!!");
    }
}