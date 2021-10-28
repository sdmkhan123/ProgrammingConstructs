console.log("************************************************************************************");
console.log("Welcome to Selection Practice Problems with Arrays");
console.log("************************************************************************************");
//UC-1
let array = new Array();
while(array.length<10)
{
    let number= Math.floor(Math.random()*1000);
    if(number>=100 && number<=999)
    {
        array.push(number);
    }
}
// Print array
console.log(...array);
// Second largest number calculated
let max = Math.max.apply(null, array) // get the max of the array
array.splice(array.indexOf(max), 1) // remove max from the array
max = Math.max.apply(null, array); // get the 2nd max
console.log("Second Largest number  : " + max);
// Second smallest number calculated
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min), 1)
min = Math.min.apply(null, array);
console.log("Second Smallest number : " + min);
let sortArray = array.sort();
console.log(...array);
console.log("Second Largest number in sorted array  : " + sortArray[sortArray.length-2]);
console.log("Second Smallest number in sorted array : " + sortArray[1]);
//UC-3
let arr = [];
let num1 = 1;
arr.push(num1);
let num2 = 2;
arr.push(num2);
let num3 = -3;
arr.push(num3);
let sum = 0;
function Sum(num) 
{
    sum = sum+num;
}
arr.forEach(Sum);
if (sum == 0)
    console.log('Sum is Zero');
else{
    console.log('Sum is not zero.');
}