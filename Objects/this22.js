/* Пример использования "this" внутри конструктора: */

function Animal(type) {
    this.type = type;
    this.sayType = function() {
        console.log(this.type);
    };
};

let cat = new Animal("Cat"); 
cat.sayType(); // "Cat"