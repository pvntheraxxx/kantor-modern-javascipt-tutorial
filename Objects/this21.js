/* Пример использования "this" как обычной функции (не метод): */

function showBrand() {
    console.log(this.brand);
};

let bike = {
    brand: "Honda",
    showBrand: showBrand
};

bike.showBrand(); // "Honda"
showBrand(); // undefined или "window" в браузере