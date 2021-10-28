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
console.log("===============================================================================");