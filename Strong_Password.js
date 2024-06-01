function minimumNumber(n, password) {
let count=0;
let d;
const numbers = /[0-9]/;
let lower_case = /[a-z]/;
let upper_case = /[A-Z]/;
let  special_characters = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
if(n<=3)
{
    return 6-n;
}
  if(n>=4 && n<6)
  {
    d=6-n;
  }
  if(!(numbers.test(password)))
  {
     count++; 
  }
  if(!(lower_case.test(password)))
  {
      count++;
  }
  if(!(upper_case.test(password)))
  {
      count++;
  }
  if(!(special_characters.test(password)))
  {
      count++;
  }
  if(d==undefined)
  {
      return count;
  }
  else{
  let j=Math.max(d,count)
  return j;
  }
}
