/* Проверка на вызов в режиме конструктора: new.target */

function User() {
    console.log(new.target);
};

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }