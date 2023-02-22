export function checkTypes(Name,Age,Id)
{
if(typeof(Name)!='string'||typeof(Age)!='number'||typeof(Id)!='string'||Age<0||Age>150)
return false;
}
