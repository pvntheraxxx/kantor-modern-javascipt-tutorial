/* Сторонний код может создать для этого 
свой символ Symbol("id"): */

// ...
let user = {
    name: "Вася",
};

let id = Symbol("id");
user[id] = 1;

user[id] = "Их идентификатор";
console.log(user[id]); // Их идентификатор
