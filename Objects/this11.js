/* Использование "this" в литерале объекта */
"use strict";

function makeUser() {
    return {
        name: "Sasha",
        ref: this,
    };
};

let user = makeUser();
console.log(user.ref.name); // undefined