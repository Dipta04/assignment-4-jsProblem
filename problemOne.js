// first problem
function radianToDegree(radian)
{
if(typeof radian=="number")
{
const oneradian=57.2958;
let result=radian*oneradian;
result=result.toFixed(2);
result=parseFloat(result);
return result;
}
else
{
console.log('please give any number');
}
}