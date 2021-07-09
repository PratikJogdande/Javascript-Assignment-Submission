//FizzBuzz Assignment
for(let i=1; i<=100; i++)
    {
    let p=i/3;
    let q=i/5;
    let r=i/15;
    if(Number.isInteger(r))
    {
         console.log("FizzBuzz");
    }
    else if(Number.isInteger(p))
    {
        console.log("Fizz");
    }
    else if(Number.isInteger(q))
    {
        console.log("Buzz");
    }
    else
        {
        console.log(i);
        }
    }