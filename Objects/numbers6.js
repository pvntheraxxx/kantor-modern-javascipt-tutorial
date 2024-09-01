/* isFinite(value) преобразует аргумент в число и
возвращает true, если оно является обычным числом,
т.е. не NaN/Infinity/-Infinity: */

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity
console.log(isFinite(11)); // true

console.log(isFinite(NaN)); // false
console.log(isFinite(null)); // true
console.log(isFinite(undefined)); // false

console.log(isFinite(-0)); // true