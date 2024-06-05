function timeConversion(s) {
    let c;
    const time=s.slice(8,11)
    const minute=s.slice(3,5)
    const seconds=s.slice(6,8)
    const hours=s.slice(0,2)
    let hourInt = parseInt(hours, 10);
   
    if(hourInt==12 &&time=='PM')
    {
    return (hourInt+':'+minute+':'+seconds)}
    else if(hourInt==12&& time=='AM'){
     hourInt=hourInt-12;
     const hourStr = hourInt.toString().padStart(2, '0');
    return (hourStr+':'+minute+':'+seconds)}
    else if(time=='PM'){
    return (hourInt+12+':'+minute+':'+seconds)}
    else if(time=='AM'){
    return (hours+':'+minute+':'+seconds)}
}
