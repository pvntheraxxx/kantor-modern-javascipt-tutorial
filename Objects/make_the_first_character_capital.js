/* Cделать первый символ заглавным  */

function capitalizeFirstLetter(string) {
    if (!string) return string; // Проверка на пустую строку
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const text = "hello world";
console.log(capitalizeFirstLetter(text)); // Вывод: "Hello world"