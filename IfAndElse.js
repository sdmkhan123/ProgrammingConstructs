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

var startDate=new Date();
startDate.setMonth(3);
startDate.setDate(20);
startDate.setFullYear(2020);

var endDate=new Date();
endDate.setMonth(6);
endDate.setDate(20);
endDate.setFullYear(2020);

var d=new Date(2020, 4, 24);
if(d>startDate&&d<endDate)
{
    console.log("true");
}
else{
    console.log("false");
}
//3. program to check leap year
const year =  2021
//three conditions to find out the leap year
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) 
{
    console.log(year + ' is a leap year');
}
else 
{
    console.log(year + ' is not a leap year');
}
console.log("===============================================================================");
