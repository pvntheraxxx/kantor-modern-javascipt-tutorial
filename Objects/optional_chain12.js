let key = "firstName";

let user1 = {
    firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

delete user?.name; // удаляет user.name если пользователь существует
