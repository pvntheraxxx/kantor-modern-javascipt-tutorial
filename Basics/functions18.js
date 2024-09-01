/* Результат функции с пустым return или
без него - undefined. Если функция не возвращает
значения, это всё равно, как если бы она возвращала
undefined: */

function doNothing() { /* пусто */ }
console.log(doNothing() === undefined); // true

/* Пустой return аналогичен return undefined */

function doNothing2() { return; }
console.log(doNothing2() === undefined); // true

/* Вывод: если функция ничего не возвращает, то она
по умолчанию возвращает значение undefined, вернее,
функции всегда что-то возвращают, но в случае, если
у функции, например, отсутствует оператор return или
оператор return пуст и ничего не возвращает, то тогда
функция возвращает тип undefined. */