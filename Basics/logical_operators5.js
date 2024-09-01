/* Представим, что у нас имеется ряд переменных, которые могут
содержать данные или быть null/undefined. Как мы можем найти
первую переменную с данными? */

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";
console.log(name); // выбирается "John" - первое истинное значение
