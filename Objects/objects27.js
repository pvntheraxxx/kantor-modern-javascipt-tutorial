// Math.trunc - встроенная функция, которая удаляет десятичную часть

console.log(String(Math.trunc(Number("49")))); // "49", не то же самое => свойство целочисленное
console.log(String(Math.trunc(Number("+49")))); // "49", не то же самое, что "+49" => свойство не
console.log(String(Math.trunc(Number("1.2")))); // "1", не то же самое, что "1.2" => свойство не