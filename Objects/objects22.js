let user = { name: "Sasha", age: 27 };

console.log("age" in user); // true, user.age существует
console.log("blabla" in user); // false, user.blabla не существует