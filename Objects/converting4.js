/* Если нет Symbol.toPrimitive, тогда JavaScript 
пытается найти методы toString и valueOf: */

let user = { name: "John" };

console.log(user); // [object Object]
console.log(user.valueOf() === user); // true

console.log(user.valueOf()); // { name: 'John' }