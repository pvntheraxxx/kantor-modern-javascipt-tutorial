/* А вот пример с пустым return (или мы могли бы поставить
примитив после return, неважно): */

function SmallUser() {
    this.name = "John";
    return; // <-- возвращает this
};

console.log(new SmallUser().name); // John