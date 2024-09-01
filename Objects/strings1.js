/* Одинарные и двойные кавычки работают, по сути, одинаково, 
а если использовать обратные кавчки, то в такую строку мы
сможем вставлять произвольные выражения, обернув их
в ${...}: */

function sum(a,b) {
    return a + b;
};

console.log(`1 + 2 = ${sum(1,2)}.`); // 1 + 2 = 3.