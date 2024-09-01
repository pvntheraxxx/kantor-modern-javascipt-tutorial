/* parseInt и parseFloat преобразуют в число */

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("12.3")); // 12, вернётся только целая часть
console.log(parseFloat("12.3.4")); // 12.3, произойдёт остановка чтения на второй точке
