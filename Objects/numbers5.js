/* Проверка isFinite и isNaN */

// isNaN(value) преобразует значение в число
// и проверяет является ли оно NaN:
console.log(isNaN(NaN)); // true
console.log(isNaN("Hello")); // true
console.log(isNaN(123)); // false

// NaN не является равным ничему другому,
// даже самому себе:
console.log(NaN === NaN); // false