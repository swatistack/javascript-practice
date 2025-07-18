// // let name = "       Swati    ";
// // console.log(name.trim());
// // let firstName = prompt("Enter Yout Password");
// // console.log(firstName.trim());
// // let str1 = "My name is swati ";
// // console.log(str1.toUpperCase());
// // console.log(str1.toLowerCase());
// // // Using of index of method with passing a argument 
// // let names = "My name is swati chauhan";
// // console.log(names.indexOf("z"));
// // // This is Example of chanining in js , e use multiple methods in this 
// // let str = "   hello";
// // let finalStr = str.trim();
// // console.log(finalStr);
// // console.log(finalStr.toUpperCase());
// // console.log(str.toUpperCase().trim());
// // // Using slice methid in js
// // let msg = "Hello";
// // console.log(msg.slice(-3));
// // // Replace and Repeat method in javascript
// // let newMsg = "Hello";
// // console.log(newMsg.replace("Hello", "SwatiChauhan"));
// // console.log(newMsg.repeat(5));
// // let college = "ApnaCollege";
// // console.log(college.indexOf('na'));
// // console.log(college.replace("Apna", "Our"));
// // console.log(college.slice(4));
// // console.log(college.replace('l', 't'));
// // // array Shifting and unshifting
// // let array = ["Jan", "Feb", "mar", "April"]
// //     // Push and pop mehod
// // let cars = ["ferari", "Toyota", "BMW", "Audi"];
// // console.log(cars.push("Kia"));
// // console.log(cars);
// // console.log(cars.pop());
// // console.log(cars);
// // // Using the splice method 
// let days = ["january", "july", "march", "august"];

// console.log(days.splice(0, 2, "july", "june"));
// console.log(days);
// let lang = ["C", "C++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse());
// console.log(lang.indexOf("javascript"));
// let arr1 = [
//     ["X", "", "O"],
//     [" ", "X", " "],
//     ["O", "", "X"]
// ];
// console.log(arr1);
// // Asignment Solution
// let arr = [7, 9, 0, -2];
// // console.log(arr.pop());
// // console.log(arr);
// console.log(arr.splice(0, 1));
// let str = prompt("Please enter an string");
// if (str.length == 0) {
//     console.log("strng is empty");
// } else {
//     console.log("Not empty");
// }
// let string = "charWcter";
// let idx = 4;

// if (string[idx] == string[idx].toLowerCase()) {
//     console.log("lowercase");
// } else {
//     console.log('not an lowercase');
// }
// let newStr = ("     arrayyy    ");
// console.log(newStr.trim());
// let arr22 = ["red", "orange", "Green", "Yellow"];
// let newArr = arr22.includes("Green")
// console.log(newArr);
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 != 0) {
//         console.log(i);

//     }
// }
// for (let j = 2; j <= 10; j++) {
//     if (j % 2 == 0) {
//         console.log(j);

//     }
// }
// let n = prompt("entern num");
// n = parseInt(n);

// for (let k = n; k <= n * 10; k = k + n) {

//     console.log(k);


// }
// // const favourite = "Avtar";
// // let gues = prompt("Enter movie name ");
// // while (gues != favourite) {
// //     // console.log("");
// //     if (gues == 'quit') {
// //         console.log("quit");
// //         break;
// //     }
// //     gues = prompt("Wrong gues please try again");
// // }
// // if (gues == favourite) {
// //     console.log("Great, Your choice is very nice");
// // }
// // let l = 1;
// // while (l <= 5) {
// //     if (l == 3) {
// //         break;

// //     }
// //     console.log(l);
// //     l++;

// // }
// console.log("using 3");
// let fruits = ["apple", "banan", "mango", "Lichi"];
// fruits.push("pineapple");
// for (i = fruits.length - 1; i >= 0; i = i - 1) {
//     console.log(i, fruits[i]);
// }
let heros = [
    ["swati", "Deepaak", "Komal", "Tanu"],
    ["Car", "Bike", "Thar", "Truck"]
];
for (let i = 0; i < heros.length; i++) {
    console.log(i, heros[i], heros[i].length)
    for (j = 0; j <= heros[i].length; j++)
        console.log(`j=${j}.${heros[i][j]}`);
}