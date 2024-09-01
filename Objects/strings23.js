/* includes, startsWith, endsWith */

console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false
// str.includes(substr,pos) возвращает true, если
// в строке str есть подстрока substr, либо 
// false, если нет.

// Необязательный второй аргумент str.includes позволяет
// начать поиск с определённой позиции:
console.log("Midget".includes("id")); // true
console.log("Midget".includes("id",3)); // false, поиск начат с позиции 3

