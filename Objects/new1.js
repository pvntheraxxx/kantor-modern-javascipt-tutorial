/* Другими словами, new User (...) делает что-то вроде: */

function User(name) {
    // this = {}; (неявно)

    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;

    // return this; (неявно)
};

let user1 = new User("Jack"); // свойство name: "Jack"
let user2 = new User("Sasha"); // свойсво name: "Sasha"
let user3 = new User(); // свойство name: undefined
let user4 = new User(""); // свойство name: "пустая строка"

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);