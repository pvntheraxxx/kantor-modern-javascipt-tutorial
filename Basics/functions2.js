/* Локальные переменные. Переменные, объявленные внутри функции,
видны только внутри этой функции. Например: */

function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
    console.log(message);
}

showMessage(); // Привет, я JavaScript

/* Вывод: console.log(message) - будет ошибка, т.к. переменная
message видна только внутри функции */