const users = ["Swati", "Komal", "Tanu", "Kartik"];
users.forEach(function(users) {
    console.log(`Hello ${users} Welcome to your Account`);
});
// Using Arrow ES6 functions
users.forEach((users) => {
    console.log(`Hello ${users} Welcome to your Account`);
});

let arr = [1, 2, 3, 4, 5, 6];
let print = function(arr) {
    console.log(arr);
}
arr.forEach(print);
// using forEach for object
let obj = [{
    name: "Swati",
    marks: 90
}, {
    name: "Deepaak",
    marks: 100
}, {
    name: "Tanu",
    marks: 90
}]
obj.forEach((obj) => {
    console.log(obj.marks);
});
let price = [222, 333, 444];
let priceGst = price.map((el) => {
    return (el + (el * 0.18));
});
console.log(priceGst);
// using forEach
let newPrice = [222, 333, 444];
let gstPrice = [];
let gstCount = price.forEach(function(el) {
    let newGstPrice = (newPrice + (newPrice * 0.18));
    gstPrice.push(newGstPrice);
});
console.log(gstPrice);
// Using the filter method
let nums = [3, 4, 5, 6, 7, 8, 9, 0];
let newNums = nums.map((el) => {
    return el % 2 == 0;
});
console.log(newNums);
// Using every and some method

let arrobj = [{
    name: "Shoes",
    stock: 23
}, {
    name: "Skirt",
    stock: 24
}, {
    name: "kurties",
    stock: 80
}]

let newobj = arrobj.every(el => el.stock > 0);

console.log(newobj);
// Reduce() Method
let num = [2, 4, 5, 6];
let fianlVal = num.reduce((res, el) => {
    console.log(res);
    return (res + el);
})
console.log(fianlVal);
// Using Reduce method
let arry = [2, 3, 4, 5, 6, 7, 81, 2, 3, 6, 3, 0];
max = -1;
for (let i = 0; i < arry.length; i++) {
    if (max < arry[i]) {
        max = arry[i];
    }

}
console.log(max);

let newArr = arry.reduce((max, el) => {
    if (max > el) {
        return max;
    } else {
        return el;
    }
})
console.log(newArr);