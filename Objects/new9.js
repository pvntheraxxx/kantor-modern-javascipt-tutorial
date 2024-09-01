/* Пропуск скобок. Кстати, мы можем не ставить круглые
скобки после new: */

function User(name) {
    this.name = name;
};

let user1 = new User; // <-- без скобок

// то же, что и
let user2 = new User("Sasha");

console.log(user1);
console.log(user2);