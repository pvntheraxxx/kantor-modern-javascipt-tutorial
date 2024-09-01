/* Считывание адреса с помощью user?.address работает, 
даже если объект user не существует: */

let user = null;

console.log(user?.address); // undefined
console.log(user?.address.street); // undefined