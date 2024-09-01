/* Мы можем переписать функцию и вернуть то же 
самое this со значением undefined: */
"use strict";

function makeUser() {
    return this; // на этот раз нет литерала объекта
};

console.log(makeUser().name);