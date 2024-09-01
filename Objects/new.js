/* Конструктор, оператор "new" */

// "User" - это функция-конструктор
// Функция "User" принимает в качестве аргумента "name"
// И записывает в поле "name" параметр, который ей передают
function User(name) {
    this.name = name;
    this.isAdmin = false;
};

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false