/* Квадратные скобки всегда возвращают undefined для
отрицательных индексов. Например: */

let str = `Hello`;

console.log(str[-2]); // undefined
console.log(str[-1]); // undefined

console.log(str.at(-2)); // l
console.log(str.at(-1)); // o