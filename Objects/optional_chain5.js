/* Ещё немного лучший способ написать это, используя оператор &&: */

let user = {}; // пользователь без адреса
console.log(user.address && user.address.street && user.address.street.name);
// undefined