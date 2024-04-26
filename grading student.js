function gradingStudents(grades) {
    let c=[]
    for(let i=0;i<grades.length;i++)
    {
        if(grades[i]<38)
        {
           c.push(grades[i])
        }else{
            // console.log(grades[i])
            let d=Math.ceil(grades[i]/5) * 5
            // console.log(d)
            if((d-grades[i])<3)
            {
               c.push(d)
            }
            else 
            {
             c.push(grades[i])
            }
        }}
        return c;
}
