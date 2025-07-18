let number1 = 123455;
console.log(number1 % 10);
let sum = 0;
while (number1 > 0) {
    digit = (number1 % 10)
    sum += digit;

    number1 = parseInt(number1 / 10);
}
console.log(sum);