function timeConversion(s) {
    let c=s.substring(0,2)
    let d=s.substring(3,5)
    let e=s.substring(6,8)
    let j=parseInt(c)
    let h=j+12;
    let p=s.substring(s.length-2)
   if(c==12 && p=="AM"){
   let q=("00:"+""+d+":"+e)
   return q;}
   else if(c==12 && p=="PM"){
   let w=("12:"+""+d+":"+e)
   return w;}
   else if(p=="PM"){
    let r=(h+":"+d+":"+e)
    return r;}
    else if(p=="AM"&& (c!=12))
    {
        let y=(c+":"+d+":"+e)
        return y;
    }
   }
