/* Ещё один пример. В веб-разработке мы можем получить объект,
соответствующий элементу веб-страницы, с помощью специального
вызова метода, такого как document.querySelector('.elem'), и он 
возвращает null, когда такого элемента нет. */

// query - с английского значит "запрос"
// document.querySelector('.elem') равен null, если элемента нет
let html = document.querySelector('.elem').innerHTML; // ошибка, если он равен null
console.log(html);