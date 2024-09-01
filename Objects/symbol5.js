/* Например, мы работаем с объектами user, которые
принадлежат стороннему коду. Мы хотим добавить к ним
идентификаторы. Используем для этого символьный ключ: */

let user = {
    name: "Вася",
};

let id = Symbol("id");
user[id] = 1;

console.log(user[id]); // 1
// мы можем получить доступ к данным по ключу-символу
