/* Массивы */

// Мы можем явно вычислить индекс последнего 
// элемента, а затем получить к нему доступ вот
// так: fruits[fruits.length - 1];

let fruits = [ "Apple","Orange","Plum" ];
console.log(fruits[fruits.length - 1]); // Plum
// fruits [x], где x - это fruit.length - 1

// К счастью, есть более короткий синтаксис:
// fruits.at(-1)

let fruits2 = [ "Apple", "Orange", "Plum" ];
// то же самое, что и fruits[fruits.length - 1]
console.log(fruits.at(-1)); // Plum