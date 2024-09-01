/* Простой пример работы сборщика мусора */

// в user находится ссылка на объект
let user = {
    name: "John",
};
console.log(user);

user = null;

console.log(user);