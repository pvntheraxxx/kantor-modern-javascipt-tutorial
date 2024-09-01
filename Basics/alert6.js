console.log(0 == false); // true
console.log(0 == ''); // true

console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(null == undefined); // true 

console.log(1 === "1"); // false


/* Вывод: для оператора строгого равенства "==="
разные типы всегда означают разные значения. Значения
null и undefined равны друг другу, но не равны ничему ещё. */