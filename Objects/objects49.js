/* Решение проблемы копирования вложенных объектов: */

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

console.log(user.sizes.height); // 182