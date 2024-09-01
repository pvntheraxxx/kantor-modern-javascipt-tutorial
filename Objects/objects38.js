/* Мы можем использовать любую переменную для доступа
к объекту и изменения его содержимого: */

let user = { name: "Sasha" };
let admin = user; 

admin.name = "Pete"; // изменено по ссылке из переменной "admin"
console.log(user.name); // "Pete", изменения видны по ссылке из переменной "user"

/* Вывод: как переменная "user", так и переменная "admin" играют роль
интерфейса доступа к объекту, который находится 
в оперативной памяти. */