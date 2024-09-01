/* new function() { ... }  */

// создаём функцию и сразу же вызываем её с помощью new
let user = new function() {
    this.name = "John"; 
    this.isAdmin = false;

    /* this говорит о том, что свойства name
    и isAdmin создаются в текущей области видимости.
    т.е. благодаря ключевому слову "this" переменные (поля)
    name и isAdmin создаются в текущем контексте. 
    В данном случае текущий контекст - это всё, что
    находится в пределах объекта "user" */

    // ... другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};

console.log("user: ", user); // user:  { name: 'John', isAdmin: false }
console.log("user: ", user.name); // user:  John
console.log("user: ", user.isAdmin); // user:  false