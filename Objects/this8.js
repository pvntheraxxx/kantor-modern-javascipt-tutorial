/* Значение this вычисляется во время выполнения
кода, в зависимости от контекста. Например, здесь
одна и та же функция назначена двум разным объектам
и имеет различное значение "this" в вызовах: */

let user = { name: "Sasha" };
let admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
};

console.log(user);
console.log(admin);

// используем одну и ту же функцию в двух объектах
user.f = sayHi; // добавляем функцию как свойство
admin.f = sayHi; // к объектам user и admin

console.log(user); // функции добавлены
console.log(admin);

/* Ключевое слово "this" используется для работы
внутри объектов с разным контекстом.
Для работы с разными значениями свойств, свойства
могут быть одинаковыми, но контекст разный. */

// эти вызовы имеют разное значение this
// "this" внутри функции - это объект "перед точкой"

user.f(); // Sasha (Контекст: this == user)
admin.f(); // Admin (Контекст: this == admin)

admin["f"](); // Admin
// (нет разницы между использованием точки или
// квадратных скобок для доступа