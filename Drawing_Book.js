function pageCount(n, p) {
var count=0;
let count1=0;
var page=1;
while(page<p)
{
    count++;
    page+=2;
}
if(n%2!=0)
{
    page=n-1
}
else
{
    page=n;
}
while(page>p){
count1++;
page-=2;
}

if(count<count1)
{
    return count;
}
else {
    return count1;
}
}
