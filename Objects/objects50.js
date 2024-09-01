/* Ситуация с вложенными объектами */

let user = {
    name: "John",
    sizes: { 
        height: 182,
        width: 50,
    },
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, это тот же объект

// user и clone обладают общим свойством sizes
user.sizes.width++; // изменяем свойства в первом объекте
console.log(clone.sizes.width); // 51, видим результат в другом