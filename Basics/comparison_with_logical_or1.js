/* Рассмотрим следующий пример: */
let height = 0;

/* height || 100 проверяет height на ложное значение, оно равно 0, да, ложное.
Поэтому результатом || является второй аргумент, т.е. 100 */
console.log(height || 100); // 100
/* height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку
это не так, то результатом является сама переменная height, т.е. 0. */
console.log(height ?? 100); // 0



