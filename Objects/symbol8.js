/* Использование символа при литеральном объявлении 
объекта { ... }: */

let id = Symbol("id");

let user = {
    name: "Вася",
    [id]: 123, // просто "id: 123" не сработает
};

// Это вызвано тем, что нам нужно использовать
// значение переменной id в качестве ключа,
// а не строку "id"

console.log("id: ", id); // id:  Symbol(id)
console.log("user: ", user); // user:  { name: 'Вася', [Symbol(id)]: 123 }