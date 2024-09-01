/* Существуют специальные короткие свойства для упрощения этой
записи. Вместо name:name мы можем написать просто name: */

function makeUser(name,age) {
    return {
        name, // то же самое, что и name: name
        age, // то же самое, что и age: age
        // ...
    };
};

let user = makeUser("Sasha", 27);
console.log(user); // { name: 'Sasha', age: 27 }