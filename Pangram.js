function pangrams(s)
 {
     let Prags=s.toString().toLowerCase()
     console.log(Prags)
     let count1=0;
     let count2=0;
   let Words=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    let checkPangram=Words.map((a)=>{
        if((Prags.includes(a)))
        {
            count1++;
        }
        else
        {
            count2++;
        }
        
    })
    checkPangram
    console.log("1",count1)
    console.log("2",count2)
    if(count2==0)
    {
        return 'pangram'
    }
    else {
        return 'not pangram'
    }
    
}
