// fifth problem
function isBestFriend(objectone,objecttwo)
{
if(typeof objectone=="object" && typeof objecttwo=="object")
{
if(objectone.name==objecttwo.friend && objectone.friend==objecttwo.name)
{
return true;
}
else
{
return false;
}
}
else
{console.log("please give valid thing");}
}