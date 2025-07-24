const square = (a, pow) => {
    console.log(a ** pow);
}
square(2, 2);

let id = setInterval(() => {
    console.log("HELLO");

}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);