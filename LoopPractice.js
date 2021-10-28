console.log("************************************************************************************");
console.log("Welcome to Selection Practice Problems with Loops stmt");
console.log("************************************************************************************");
//UC-1
let input = 5;
let result = 1;
for(let i = 1; i <= input; i++)
{
    result = result*2;
    console.log("2 to the power " + i + " is " + result);
}
//UC-2
let num = 9;
let is_prime = true;
if (num == 1)
{
    console.log("1 is neither prime nor composite");
    process.exit(0);
}
for (let i = 2; i <= Math.sqrt(num); i++)
{
    if (num % i == 0)
        is_prime = false;
}
if (is_prime)
    console.log(num + " is a Prime number");
else
    console.log(num + " is not Prime number");
console.log("===============================================================================");