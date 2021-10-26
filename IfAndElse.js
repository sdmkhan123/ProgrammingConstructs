console.log("************************************************************************************");
console.log("Welcome to Selection Practice Problems with if & else");
console.log("************************************************************************************");
console.log("===============================================================================");
console.log("Welcome to Selection Practice Problems with if & else");
console.log("===============================================================================");
//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
numbers=[];
for(i=0;i<5;i++)
{
 numbers[i]=Math.floor((Math.random() * 900) + 100);
}
let max=0;
let min=1000;
for(i=0;i<5;i++)
{
    if(max<numbers[i])
    {
        max=numbers[i];
    }
    if(min>numbers[i])
    {
        min=numbers[i];
    }
}
console.log("Max no is "+max);
console.log("Min no is "+min);
//2. Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.
console.log("===============================================================================");
