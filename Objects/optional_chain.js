/* Проблема "несуществующего свойства" */

let user = {}; // пользователь без свойства "address"

console.log(user.address.street); // Ошибка! 