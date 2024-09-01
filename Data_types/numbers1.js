/* Метод num.toString(base) возвращает строковое 
представление числа num в системе счисления base. */

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log(num.toString(10));  // 255
// base может варьироваться от 2 до 36 (по умолчанию 10)

let num1 = 123456
console.log(num1.toString(36)); // 2n9c

let num2 = 123..toString(16);
console.log(num2); // 7b

// ещё несколько примеров
console.log(999..toString(2)); // 1111100111
console.log(999..toString(16)); // 3e7
console.log(999..toString(10)); // 999

/* Чтобы обратиться напрямую к методам примитивов,
нужно использовать точечную запись с двумя точками
".." */

console.log((777).toString(2)); // 1100001001
console.log((777).toString(16)); // 309
console.log((777).toString(10)); // 777