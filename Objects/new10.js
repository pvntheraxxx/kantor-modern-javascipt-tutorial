/* Создание методов в конструкторе */

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("Меня зовут: " + this.name);
    };
};

let john = new User("John");
john.sayHi(); // Меня зовут: John

/* 
john = {
    name: "John",
    sayHi: function() { ... }
}
*/