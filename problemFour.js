// forth problem
function publicBusFare(people)
{
const Bustake=50;
const microbustake=11;
const publicbusrate=250;
if(people>=microbustake && people<Bustake)
{
let remainder=people%microbustake;
let expense=remainder*publicbusrate;
return expense;
}
else if(people>=Bustake && people<(Bustake+microbustake))
{
let remainder=people%Bustake;
let expense=remainder*publicbusrate;
return expense;
}
else
{
let remainderone=people%Bustake;
let remaindertwo=remainderone%microbustake;
let expense=remaindertwo*publicbusrate;
return expense;
}
}