/* Работа с объектом при помощи цикла "for" */

const user = {
    firstName: "Sasha", // Первая итерация key
    lastName: "Pushkin", // Вторая итерация key
    age: 27, // Третья итерация keyА 
    married: true,
};

const clone = {};

for (let key in user) {
    clone[key] = user[key];
};