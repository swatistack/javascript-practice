let digit = 123455;
let number = digit.toString().length;
console.log(number);

let number1 = 123455;
let count1 = 0;
while (number1 > 0) {
    count1++;
    number1 = parseInt(number1 / 10);
}
console.log(count1);