/* Неточные вычисления */

console.log(1e500); // Infinity
console.log(0.1 + 0.2 == 0.3); // false

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1.toFixed(20)); // 0.10000000000000000555