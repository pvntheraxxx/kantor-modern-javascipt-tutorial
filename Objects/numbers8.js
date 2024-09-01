/* Number.isNaN(value) */

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("str" / 2)); // true

// обратите внимание на разный результат:
console.log(Number.isNaN("str")); // false, так как "str" является строкой, а не числом
console.log(isNaN("str")); // true, так как isNaN сначала преобразует строку "str" в число
