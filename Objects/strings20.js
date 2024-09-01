/* Поиск подстроки */

let str = "Widget with id";

if (str.indexOf("Widget")) {
    console.log("Совпадение есть"); // не работает
};

/* Мы ищем подстроку "Widget", и она здесь есть, прямо
на позиции 0. Но console.log() не показывается, т.к. 
str.indexOf("Widget") возвращает 0, и if решает, что 
тест не пройден. Поэтому надо делать проверку на -1: */

let str2 = "Widget with id";

if (str2.indexOf("Widget") != -1) {
    console.log("Совпадение есть"); // теперь работает
};