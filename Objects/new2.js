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

console.log("user1: ", user1); // User { name: 'Jack', isAdmin: false }
console.log("user1: ", user1.name); // user1:  Jack
console.log("user1: ", user1.isAdmin); // user1:  false

console.log("user2: ", user2); // user2:  User { name: 'Sasha', isAdmin: false } 
console.log("user2: ", user2.name); // user2:  Sasha
console.log("user2: ", user2.isAdmin); // user2:  false