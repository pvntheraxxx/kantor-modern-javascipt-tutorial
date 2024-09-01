/* Две ссылки. Представим, что мы скопировали ссылку из user в admin: */

// в user находится ссылка на объект
let user = {
    name: "John",
};

let admin = user;

console.log(user + " and " + admin);

// теперь сделаем то же самое: 
user = null;
console.log(user); // null