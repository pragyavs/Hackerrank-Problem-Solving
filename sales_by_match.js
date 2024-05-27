function sockMerchant(n, ar) {
    let count=0;
    let pair=ar.sort((a,b)=>a-b);
    for(let i=0;i<n;i++)
    {
        if(pair[i]==pair[i+1])
        {
            i++;
            count++;
        }
    }
    return count;
}
