/* Инкремент/декремент можно использовать в любых выражениях */

let counter1 = 1;
console.log(2 * ++counter1); // 4

let counter2 = 1;
console.log(2 + counter2++); // 2, потому что counter++ возвращает "старое" значение

let counter3 = 1;
console.log(2 * counter3);
counter3++;