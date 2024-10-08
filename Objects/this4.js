/* Для доступа к информации внутри объекта метод
может использовать ключевое слово "this". Значение
this - это объект "перед точкой", который используется
для вызова метода. Например: */

let user = {
    name: "Sasha",
    age: 27,
    sayHi() {
        // "this" - это "текущий объект"
        console.log(this.name); // "Sasha"
    },
};

user.sayHi(); // Sasha

