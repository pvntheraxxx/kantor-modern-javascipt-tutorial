/* Объект, объявленный как константа, может быть изменён */

const user = {
    name: "Sasha",
    age: 27,
    isAdmin: true,
};

console.log(user);
console.log(user.name);

user.name = "Pete"; 
console.log(user);
console.log(user.name);
