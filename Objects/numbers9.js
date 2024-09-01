/* Number.isFinite(value) */

console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(2 / 0)); // false

// Обратите внимание на разный результат:
console.log(Number.isFinite("123")); // false, т.к. "123" является строкой, а не числом
console.log(isFinite("123")); // true, т.к. isFinite сначала преобразует строку "123" в число
