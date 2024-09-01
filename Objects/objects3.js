/* Для удаления свойства мы можем использовать оператор delete: */

let user = {
    name: "Sasha",
    age: 27,
    isAdmin: true,
    test: "test",
};

console.log(user);
delete user.test; // свойство test удаляется 

console.log(user);