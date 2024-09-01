/* Имя свойства может состоять из нескольких слов, но тогда
оно должно быть заключено в кавычки: */

let user = {
    name: "Sasha",
    age: 30,
    isAdmin: true,
    "likes birds": true, // имя свойства из нескольких слов должно быть в кавычках
    "main_index": 1
};

console.log(user["likes birds"]); // true 