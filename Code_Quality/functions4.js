/* Исправленный вариант */

function pow(x,n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = 2;
let n = 6;

if (n <= 0) {
    console.log(`Степень ${n} не поддерживается,
    введите целую степень, большую 0`);
} else {
    console.log(pow(x,n));
}