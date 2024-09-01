/* Пример цикла 'for...in' с объектом "user": */

const user = {
    firstName: "Sasha",
    lastName: "Pushkin",
    age: 27,
    married: true,
};

for (let key in user) {
    console.log(key + ": " + user[key]);
};