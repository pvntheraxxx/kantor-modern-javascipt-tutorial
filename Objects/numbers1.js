/* Решение проблемы с неточностью в JavaScript с
помощью метода toFixed(n): */

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30
console.log(sum.toFixed(1)); // 0.3

// метод toFixed(n) всегда возвращает строку
// об этом нужно помнить