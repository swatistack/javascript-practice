let n = 5;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
        console.log(" ");
    }
    console.log("*");
    if (i != 0) {
        for (let j = 0; j < 2 * i - 1; j++) {
            console.log(" ");
        }
        console.log("*");

    }
    console.log("\n");


}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(" ");
    }
    console.log("*");
    if (i != n - 2) {
        for (let j = 0; j < 2 * (n - i) - 5; j++) {
            console.log(" ");
        }
        console.log("*");

    }

    console.log("\n");


}