/* Поиск подстроки */

const str = "Hello, world!";

console.log(str.indexOf('world'));
// с седьмого символа в строке str найдено world

console.log(str.indexOf(",", 2));
// с пятого символа в строке найден ","
// поиск начат со второго символа