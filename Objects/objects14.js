/* Мы можем использовать и более сложные выражения в квадратных скобках: */

let fruit = "Apple";
let bag = {
    [fruit + "Computers"]: 5, // bag.AppleComputers = 5
};

console.log(bag.AppleComputers); // 5