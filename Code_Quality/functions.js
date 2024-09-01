/* Размещение функций. Если вы пишите несколько вспомогательных функций, а затем
используемый ими код, то сущестует три способа организации функций.
1. Объявить функции перед кодом, который их вызовет: */

// объявление функций
function createElement() {
    // ...
    return console.log("Функция createElement()");
}

function setHandler(elem) {
    // ...
    return console.log("Функция setHandler()");
}

function walkAround() {
    // ...
    return console.log("Функция walkAround()");
}

// код, который использует их 
let elem = createElement();
setHandler(elem);
walkAround();