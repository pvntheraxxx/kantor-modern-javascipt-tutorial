/* Если скопированное имя свойства уже существует,
оно будет перезаписано: */

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // теперь user = { name: "Pete" }