/* Ненадёжный метод */

let user = {
    name: "Sasha",
    age: 27,
    sayHi() {
        console.log(user.name); // приведёт к ошибке
    },
};

let admin = user;
user = null; // перезапишем переменную для наглядности
// теперь она не хранит ссылку на объект

console.log(admin);
console.log(user);

console.log(admin.sayHi);