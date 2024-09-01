/* Примеры методов. Для начала научим нашего пользователя
user здороваться: */

let user = {
    name: "Sasha",
    age: 27,
};

user.sayHi = function() { // Function Expression
    console.log("Привет!");
};

user.sayHi(); // Привет!

/* Здесь функция была создана в формате 
функционального выражения. */