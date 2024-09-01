/* Пример цикла 'for...in' с объектом "user": */

const user = {
    firstName: "Sasha",
    lastName: "Pushkin",
    age: 27,
    married: true,
};

for (let key in user) {
    console.log(user[key]);
};

/* user[key] выводит все значения свойств
объекта "user", а если написать просто "key",
то цикл будет выводить названия самих свойств,
а не их значений. */