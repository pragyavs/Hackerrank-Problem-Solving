function lonelyinteger(a) {
    if(a.length==1)
    return a;
    let c=a.sort((a,b)=>a-b)
   for(let i=0;i<c.length;i++)
   {
       if(c.lastIndexOf(c[i])!==c.indexOf(c[i]))
       {
           continue;
       }
       return c[i]
   }
}
