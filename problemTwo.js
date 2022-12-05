// second problem
function isJavaScriptFile(file)
{
if(typeof file=="string")
{
if(file.endsWith(".js"))
{
return true;
}
else
{
return false;
}
}
else
{
console.log("please type any name of file");
}
}