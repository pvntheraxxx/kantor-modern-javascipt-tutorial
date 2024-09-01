/* Два символа с одинаковым описанием - но они не равны */

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false