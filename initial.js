const puppeteer=require("puppeteer");
const getTradeList=require('./getTradeStockList.js');
const login=require('./login.js');
const dayForSearchQuery=require('./Util.js');

let twitterSymbolsBuyList=[];
let twitterSymbolsSellList=['BB'];
let Day=dayForSearchQuery();


async function twitterBot(){
    let browser = await puppeteer.launch({
       headless: false,
       defaultViewport: null,
       args: ["--start-maximized"],
    });
    let tabs=await browser.pages();   
    let tab=tabs[0];
    await tab.goto("https://twitter.com/explore");
    await tab.waitForTimeout(2000);
    await tab.click(".css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci");
    await tab.waitForTimeout(1000);
    let searchQuery=Day+" Options Volumes (from:MarketRebels)";
    await tab.type(".css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci",searchQuery);
    await tab.keyboard.press("Enter");
    await tab.waitForTimeout(2000);
    await tab.click('.css-1dbjc4n.r-1loqt21.r-18u37iz.r-1ny4l3l.r-1udh08x.r-1qhn6m8.r-i023vh.r-o7ynqc.r-6416eg');
    await tab.waitForTimeout(3000);
    const  results = await tab.$$eval('article div[lang]', (tweets) => tweets.map((tweet) => tweet.textContent));
    let LineData=await results.toString().split(/\r?\n/);  
    for(let i=1;i<LineData.length;i++)
    {
     await getTradeList(LineData[i],twitterSymbolsBuyList,twitterSymbolsSellList);
    }
    await login(tab,twitterSymbolsBuyList,twitterSymbolsSellList);
}
twitterBot();