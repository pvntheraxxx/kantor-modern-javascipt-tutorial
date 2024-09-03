/* Методы pop/push, shift/unshift */

const myArray1 = [ 
    "myString1",
    "myString2",
    "myString3",
    "myString4",
];

const myArray2 = [ 
    "myString1",
    "myString2",
    "myString3",
    "myString4",
];

const myArray3 = [ 
    "myString1",
    "myString2",
    "myString3",
    "myString4",
];

const myArray4 = [ 
    "myString1",
    "myString2",
    "myString3",
    "myString4",
];

myArray1.push("push() result");
console.log(myArray1); 
// добавляет элемент в конец массива myArray1

myArray2.pop();
console.log(myArray2);
// удаляет элемент с конца массива myArray2

myArray3.shift();
console.log(myArray3); 
// удаляет элемент из начала массива myArray3

myArray4.unshift("unshift() result");
console.log(myArray4);
// добавляет элемент в начало массива myArray4