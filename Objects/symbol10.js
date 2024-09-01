/* А вот Object.assign в отличие от цикла for..in, копирует 
и строковые, и символьные свойства: */

let id = Symbol("Hello, Symbol()");

let user = {
    [id]: 123,
};

let clone = Object.assign({}, user);
console.log(clone[id]); // 123