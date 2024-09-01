/* "this" в строгом режиме */

"use strict";

function showThis() {
    console.log(this);
};

showThis(); // undefined

/* В данном случае функция showThis принадлежит глобальному пространству 
области видимости. Поэтому this будет указывать на глобальный 
объект window, но, поскольку здесь указан строгий режим "use strict",
функция showThis() вернёт значение "undefined". */