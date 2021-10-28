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