/* Если же мы действительно хотим вывести символ с помощью
alert, то необходимо явно преобразовать его с помощью
метода .toString(), вот так: */

let id = Symbol("id");

console.log(id.toString()); 
console.log(id.description); // id
