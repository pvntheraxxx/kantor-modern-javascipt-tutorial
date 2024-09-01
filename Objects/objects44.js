/* Скопировать все свойства из одного объекта "user" 
в другой объект "clone" */

const user = {
    firstName: "Sasha",
    lastName: "Pushkin",
    age: 27,
    married: true,
};
const clone = {};

console.log(user["firstName"]);
console.log(user["lastName"]);
console.log(user["age"]);
console.log(user["married"]);

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.married);