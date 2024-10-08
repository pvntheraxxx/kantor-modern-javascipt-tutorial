/* Свойство length можно перезаписать */

let arr = [ 1,2,3,4,5 ];

arr.length = 2; // укорачиваем до двух элементов
console.log(arr); // [ 1,2 ]

arr.length = 5; // возвращаем length как было
console.log(arr[3]); // undefined: значения не восстановились

// Таким образом, самый простой способ
// очистить массив - это arr.length = 0