// Если первый операнд истинный,
// И возвращает второй:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0
