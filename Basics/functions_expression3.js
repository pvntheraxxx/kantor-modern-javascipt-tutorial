/* Мы так же могли бы использовать Function Expression для
объявления sayHi в первой строке: */

let sayHi = function() { // (1) создаём
    console.log("Привет!");
};

let func = sayHi;
// ...

func(); // Привет
sayHi(); // Привет