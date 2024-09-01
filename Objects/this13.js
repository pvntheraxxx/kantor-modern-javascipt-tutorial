/* Вот противоположный случай: */
"use strict";

function makeUser() {
    return {
        name: "Sasha",
        ref() {
            return this;
        },
    }; 
};

let user = makeUser();
console.log(user.ref().name); // Sasha

console.log(user.ref());