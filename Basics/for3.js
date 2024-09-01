/* Работа с массивом при помощи цикла for */

const toys = ["ball","car","doll","puzzle"];

for (let i = 0; i < toys.length; i++) {
    console.log(toys[i]);
};

/* Изначально в первой итерации toys[i] имеет значение "ball",
Во второй итерации toys[i] имеет значение "car",
В третьей итерации toys[i] имеет значение "doll",
В четвёртой итерации toys[i] имеет значение "puzzle".  */

/* toys.length - это обращение к свойству массива length. 
length хранит в себе количество элементов, которые содержит массив */

console.log("Null Element: ", toys[0]);
console.log("First Element: ", toys[1]);
console.log("Second Element: ", toys[2]);
console.log("Third Element: ", toys[3]);
console.log("Undefined Element: ", toys[4]); // несуществующий элемент