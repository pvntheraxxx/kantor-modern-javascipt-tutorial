/* Умножаем все числовые свойства на 2 */

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
console.log(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log(menu);
