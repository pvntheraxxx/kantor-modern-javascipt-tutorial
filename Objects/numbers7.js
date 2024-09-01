/* Иногда isFinite испольуется для проверки, содержится
ли в строке число: */

let num = 123;
let num2 = "hello";
// вернёт true всегда, кроме ситуаций,
// когда аргумент - Infinity/-Infinity или не число
console.log(isFinite(num)); // true
console.log(isFinite(num2)); // false