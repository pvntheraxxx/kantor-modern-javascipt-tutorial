/* Функции parseInt/parseFloat вернут NaN, если не смогли
прочитать ни одну цифру: */

console.log(parseInt('a123')); // NaN, на первом символе происходит остановка чтения

