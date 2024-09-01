/* Метод Symbol.keyFor(sym), который принимает
глобальный символ и возвращает его имя: */

// получаем символ по имени
let sym = Symbol.for("name"); 
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id