/* Поиск подстроки. Первый метод - str.indexOf(substr,pos): */

let str = 'Widget with id';

console.log(str.indexOf('Widget')); 
// 0, потому что подстрока 'Widget' найдена в начале
console.log(str.indexOf('widget'));
// -1, совпадений нет, поиск чувствителен к регистру

console.log(str.indexOf("id")); 
// 1, подстрока "id" найдена на позиции 1
// (..idget with id);