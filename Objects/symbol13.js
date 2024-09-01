/* Для любых символов доступно свойство description */

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); 
// name, глобальный символ
console.log(Symbol.keyFor(localSymbol));
// undefined для неглобального символа

console.log(localSymbol.description); // name

console.log("Переменная globalSymbol: ", globalSymbol);
console.log("Переменная localSymbol: ", localSymbol);