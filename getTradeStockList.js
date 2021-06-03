module.exports=getTradeList;

async function getTradeList(data,twitterSymbolsBuyList,twitterSymbolsSellList){
 try{   
     let tempString=await data.split('(');
     let tempString2=await tempString[1].split(' ');
     let callPrcnt=await parseInt(tempString2[0]);
     let putPrcnt=await parseInt(tempString2[2]);

     if(await callPrcnt>70)
     {
        let splitBySpc=await data.split(" ");
        let symbol=await splitBySpc[0].replace('$','');
        if(await symbol.length!=0)
        {
          await twitterSymbolsBuyList.push(symbol); 
        }
     }
     else if(await putPrcnt>40)
     {
        let splitBySpc=await data.split(" ");
        let symbol=await splitBySpc[0].replace('$','');
        if(await symbol.length!=0)
        {
          await twitterSymbolsSellList.push(symbol); 
        } 
     }
    }
 catch(error){
     //to prevent redundant non symbol data Not an actual error
      //To keep continous code flow
 }
}
