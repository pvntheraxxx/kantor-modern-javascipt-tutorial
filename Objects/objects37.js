/* При копировании переменной объекта копируется
ссылка, но сам объект не копируется. */

let user = { name: "Sasha" };
let admin = user; // копируется ссылка

console.log(user);
console.log(admin);