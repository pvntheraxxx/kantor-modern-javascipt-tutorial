/* А вот пример с document.querySelector: */

let html1 = document.querySelector('.elem')?.innerHTML; 
// будет undefined, если элемента нет

console.log(html1);