function miniMaxSum(arr) {
    let a=[]
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    // console.log(sum)
    for(let i=0;i<arr.length;i++)
    {
        a.push(sum-arr[i])
    }
    let c=a.sort()
    // console.log(c)
    console.log(a[0]+" "+a[a.length-1])
}
