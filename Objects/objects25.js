/* К примеру, давайте выведем все свойства объекта user: */

let user = {
    name: "Sasha",
    age: 27,
    isAdmin: true
};

for (let key in user) {
    // ключи
    console.log(key); // name, age, isAdmin
    // значения ключей
    console.log(user[key]); // Sasha, 27, true
};