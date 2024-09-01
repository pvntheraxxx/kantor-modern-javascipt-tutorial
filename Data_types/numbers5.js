/* Округляет значение до ближайшего числа, как в 
большую, так и в меньшую сторону, аналогично методу
Math.round: */

const num = 12.36; 
console.log(num.toFixed(1)); // "12.4"
console.log(typeof num.toFixed(1)); // string