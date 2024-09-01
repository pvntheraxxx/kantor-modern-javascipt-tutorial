/* Функция pow(x,n). Напишите функцию pow(x,n), которая 
возводит x в степень n и возвращает результаты. */

function pow(x,n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = 12; 
let n = 10;

if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число.`);
} else {
    console.log(pow(x,n));
}