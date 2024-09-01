/* Object.is сравнивает значения примерно как */

console.log(Object.is(NaN,NaN) === true); // true
console.log(Object.is(0,-0) === false); // true
