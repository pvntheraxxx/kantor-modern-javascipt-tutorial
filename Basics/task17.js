/* Вызов console.log не возвращает значения, или, иначе говоря,
возвращает undefined. */
console.log(console.log(1) || 2 || console.log(3));
