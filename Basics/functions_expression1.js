/* Функция - это значение. Можно вывести это значение
с помощью console.log() */

function sayHi() {
    console.log("Привет!");
}

console.log(sayHi); // Выведет код функции
sayHi();

/* Вывод: последняя строка не вызывает функцию, потому что
после sayHi нет круглых скобок. Существуют языки программирования,
в которых любое упоминание имени функции приводит к её выполнению,
но JavaScript к таким не относится. */