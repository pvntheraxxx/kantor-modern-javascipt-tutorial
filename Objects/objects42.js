/* Как работает оператор "in" */

const Person = {
    firstName: "Sasha",
    lastName: "Pushkin",
    age: 27,
    married: true,
};

const checkProperty1 = "firstName" in Person; // true
console.log(checkProperty1); // true

const checkProperty2 = "Sasha" in Person; // false 
console.log(checkProperty2); // false

const checkProperty3 = "aaa" in Person; // false
console.log(checkProperty3); // false