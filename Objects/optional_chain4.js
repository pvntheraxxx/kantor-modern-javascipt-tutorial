/* К примеру, давайте аналогично вычислим user.address.street.name */

let user = {}; // у пользователя нет адреса

console.log(user.address ? user.address.street ? user.address.street.name : null : null);
// it is a terrible decision