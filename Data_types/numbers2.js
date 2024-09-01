/* Округление */

// Округление в меньшую сторону
const myNumber = Math.floor(3.1); 
console.log(myNumber); // 3

// Округление в большую сторону
const myNumber1 = Math.ceil(3.1);
console.log(myNumber1); // 4

// Округление до ближайшего целого
const myNumber2 = Math.round(3.1);
console.log(myNumber2); // 3

// Удаление дробной части без округления
// Не работает в Internet Explorer
const myNumber3 = Math.trunc(4.7);
console.log(myNumber3); // 4
