console.log("************************************************************************************");
console.log("Welcome to Selection Practice Problems with Switch case");
console.log("************************************************************************************");
console.log("===============================================================================");
//UC-1
let number = Math.floor((Math.random()*10));
switch(number){
    case 0:
        console.log("Zero");
        break;    
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;           
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven")
        break;
    case 8:
        console.log("Eight")
        break;
    case 9:
        console.log("Nine")
        break;                                       
    default:
        console.log("Enter valid number");
}
//UC-2
let day = Math.floor((Math.random()*7));
switch(day){
    case 0:
        console.log("Sunday");
        break;   
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;            
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid number for Weekday");
}
//UC-4
let num = 100;
switch(num)
{
    case 1:
        console.log("Units");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Tens of Thousands");
        break;
    case 100000:
        console.log("Hundreds of Thousands");
        break;
    case 1000000:
        console.log("Millions ");
        break;
    default:
        console.log("enter correct number");
        break;
}
console.log("===============================================================================");