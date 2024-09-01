/* Ключевое слово "this" по всей видимости было написано на C++ */

// "this" в методе объекта
let obj = {
    name: "John",
    greet() {
        console.log(this.name); // John
    },
};

obj.greet(); // "John"
