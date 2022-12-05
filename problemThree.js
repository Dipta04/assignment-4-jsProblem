// third problem
function oilPrice(dieselquantity,petrolquantity,octanequantity)
{
if(typeof dieselquantity=="number" && typeof petrolquantity=="number" && typeof octanequantity=="number")
{
const dieselrate=114;
const petrolrate=130;
const octanerate=135;
let dieselprice=dieselrate*dieselquantity;
let petrolprice=petrolrate*petrolquantity;
let octaneprice=octanerate*octanequantity;
let total=dieselprice+petrolprice+octaneprice;
return total;
}
else
{console.log("please give right value");}
}