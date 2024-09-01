/* 2. Сначала код, затем функции */

// код, использующий функции
let elem = createElement();
setHandler(elem);
walkAround();

// --- вспомогательные функции ---
function createElement() {
    return console.log("Функция createElement()")
}

function setHandler(elem) {
    return console.log("Функция setHandler()")
}

function walkAround() {
    return console.log("Функция walkAround()")
}

