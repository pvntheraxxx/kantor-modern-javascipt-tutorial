/* Символы игнорируются циклом for...in ; Свойства, 
чьи ключи - символы, не перебираются циклом for..in */

let id = Symbol("id");

let user = {
    name: "Вася",
    age: 30,
    [id]: 123,
};

for (let key in user) console.log(key); 
// name, age (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
console.log("Напрямую: " + user[id]);