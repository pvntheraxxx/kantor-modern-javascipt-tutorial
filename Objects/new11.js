/* Две функции - один объект. */

function A() {};
function B() {};

let a = new A();
let b = new B();

console.log(a == b); // false, a и b не равны
// потому что это два разных объекта в памяти