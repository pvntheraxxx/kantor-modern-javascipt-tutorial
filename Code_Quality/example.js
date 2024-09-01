function pow(x,n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = 2;
let n = 5;

if (n < 0) {
    console.log(`Power ${n} is not supported,
    please enter a non-negative integer number`);
} else {
    console.log(pow(x,n));
}