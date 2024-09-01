/* Пример использования "this" как метод объекта */

let car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    },
};

console.log(car.getBrand()); // "Toyota"