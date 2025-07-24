function avgNums(a, b, c) {
    avg = (a + b + c) / 3;
    console.log("avrage of", a, b, "and", c, "is", avg);
}
avgNums(2, 3, 4);

function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);

    }
}
printTable(2);

function sumNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;


}
console.log(sumNum(4));
// Concetination array string
let str = ["Hello", "Budiies", "My name is swati"];

function concetinationStr(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
// console.log(concetinationStr());
let greet = "Hello";

function changeGreat() {
    let greet = "nameste";
    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }
}
console.log(greet);
changeGreat();