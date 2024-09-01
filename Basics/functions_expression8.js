/* В случае с Function Expression такой код вызывает ошибку. */

sayHi("Вася"); // ошибка!

let sayHi = function(name) { // (*) магии больше нет
    console.log(`Привет, ${name}`);
};