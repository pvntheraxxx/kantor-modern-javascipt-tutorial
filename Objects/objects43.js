/* Скопировать все свойства из одного объекта "user" 
в другой объект "clone" */

const user = {
    firstName: "Sasha",
    lastName: "Pushkin",
    age: 27,
    married: true,
};
const clone = {};

console.log(user);
console.log(clone);

for (let key in user) {
    clone[key] = user[key];
};

console.log(clone);