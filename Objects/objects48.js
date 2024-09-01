/* Мы также можем использовать Object.assign для замены
цикла 'for..in' для простого клонирования: */

let user = {
    name: "John",
    age: 30,
};

let clone = Object.assign({}, user);

console.log(user);
console.log(clone); // копия
console.log(user == clone); // объекты не равны

/* Object.assign() скопирует все свойства user 
в пустой объект и возвращает его. */

/* Полученные объекты user и clone не равны, 
так как метод Object.assign() создал новую
независимую копию объекта user, которая теперь
находится где-то в оперативной памяти. */