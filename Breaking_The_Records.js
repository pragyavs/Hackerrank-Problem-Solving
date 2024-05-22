function breakingRecords(scores) {
    let count1=0;
    let count2=0;
    let min=scores[0];
    let max=scores[0];
    // console.log(min)
    // console.log(max)
    for(let i=1;i<scores.length;i++)
    {
    //   console.log(scores[i])
        if(scores[i]>min)
        {
           count1++
           min=scores[i];
        }
        else if(scores[i]<max)
        {
            count2++;
            max=scores[i]
        }
        
    }
return [count1,count2];
}
