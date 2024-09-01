/* Вот как то же самое выглядело бы для document.querySelector: */

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
console.log(html);