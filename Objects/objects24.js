/* Это когда свойство существует, но содержит значение undefined: */
let obj = {
    test: undefined,
};

console.log(obj.test); // выведет undefined, значит свойство не существует?
console.log("test" in obj); // true, свойство существует!

let obj_test = {
    name: "Sasha",
    age: 27,
};

console.log("name" in obj_test); // true
console.log("age" in obj_test); // true


