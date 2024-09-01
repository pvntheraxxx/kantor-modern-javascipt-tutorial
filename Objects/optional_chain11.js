/* Синтаксис ?.[] также работает, если мы хотим использовать
скобки [] для доступа к свойствам вместо точки .. Он позволяет
безопасно считывать свойство из объекта, который может не
существовать. */

let key = "firstName";

let user1 = {
    firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined