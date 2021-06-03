module.exports=dayForSearchQuery;

function dayForSearchQuery(){
    let d = new Date();
    if(d==1 ||d==0){
       d=1;//as stock market closed on Sat Sun to acheieve latest query 
    }
   //one value shifted as acc to new york time zone 
    let weekday = new Array(6);
    weekday[2] = "Monday";
    weekday[3] = "Tuesday";
    weekday[4] = "Wednesday";
    weekday[5] = "Thursday";
    weekday[1] = "Friday";
    return  weekday[(d.getDay())];
}