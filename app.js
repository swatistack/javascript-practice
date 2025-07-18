console.log("Hello World");
let a = 10;
let b = 13;
let output = `The out put of this code is ${a+b} Rupees`;
console.log(output);
let age = 18;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cant vote");
}
let firstName = "Swati Chauhan";
if (firstName == "Swati") {
    console.log(`His name is ${firstName}`);

}
let firstColor = "Red"
let secondColor = "yellow"
let thirdColor = "green"
if (firstColor == "Red") {
    console.log(`Please stop the traffic light color is ${firstColor}`);
}
if (secondColor == "yellow") {
    console.log(`Please ready to go the traffic light color is ${secondColor}`);
}
if (thirdColor == "green") {
    console.log(`Please go  the traffic light color is ${thirdColor}`);
}
let size = 'L';
if (size === 'xl') {
    console.log("the price of this Popcorn bucket is 250");
} else if (size === 'L') {
    console.log("The price of this popcorn bucekt is Rs. 200");
} else if (size == 'M') {
    console.log("The price of this popcorn bucket is 100");
} else if (size == ' S') {
    console.log("The price of this popcorn bucket is 50");
} else {
    console.log("you need to select the size");
}
let marks = 23;
if (marks > 33 && marks <= 80 || !false) {
    console.log("Pass");
}
let str = "App";
if (str[0] === 'A' && str.length > 3) {
    console.log("Good String");
} else {
    console.log("Bad String");
}
let color = "black";
switch (color) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("slow down");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Light is Break");

}
let num = 7;
switch (num) {
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
        console.log("friday");
        break;
    case 6:
        console.log("Saterday");
        break;
    case 7:
        console.log("Have fun this is sunday");
        break;
    default:
        console.log("Day is brek");

}
// console.log(alert("Something is wrong"));
// console.warn(prompt("You need to enter a number "));
// let firstName1 = prompt("Enter ypur first name  :");
// let lastName = prompt("Enter ypur first name  :");
// console.log("Welcome", firstName1, " ", lastName, "!");
// Assignmnet Solution
let num1 = 30;
if (num1 % 10 == 0) {
    console.log("Number is good");

} else {
    console.log("Number is bed number ");
}
yourName = prompt("Enter your name ");
yourAge = prompt("Enter your age");
console.log(yourName, "is", yourAge, "old");
// Question number 3
let quarter = 4;
switch (quarter) {
    case 1:
        console.log("January , Feb, March");
        break;
    case 2:
        console.log("April , May , June");
        break;
    case 3:
        console.log("July , August , September");
        break;
    case 4:
        console.log("October , November, December");
        break;
    default:
        console.log("PAss the correct month");
}
// Quesrion number 4 
let string = "apple";
if ((string[0] === 'A' || string[0] === 'a') && (string.length > 5)) {
    console.log("Good String");
} else {
    console.log("Bed String");
}
// 
// Question 3
let A = 18;
let B = 19;
let C = 21;
if (A > B) {
    if (A > C) {
        console.log("A is Greater number");
    } else {
        console.log("C largest number");
    }

} else {
    if (B > C) {
        console.log("B is largest");
    } else {
        console.log("C ia largest");
    }
}
// Question number 6 bonus 
let P = 239;
let Q = 342;
if (P % 10 === Q % 10) {
    console.log("They have same last digit");
} else {
    console.log("Disgit are different");
}