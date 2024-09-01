/* Объекты, объявленные как константа, могут быть изменены. */

const user = {
    name: "John",
};
console.log(user); // { name: 'John' }

user.name = "Pete";
console.log(user.name); // Pete