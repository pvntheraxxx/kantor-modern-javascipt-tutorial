/* При сравнении значений разных типов JavaScript приводит 
каждое из них к числу */

console.log('String to Number: ', '2' > 1); // true, строка '2' становится числом 2
console.log('String to Number: ', '01' == 1); // true, строка '01' становится числом 1

/* Логическое значение true становится 1, а false - 0. */

console.log(true == 1); // true
console.log(false == 0); // true