/* Присваивание по цепочки работает справа налево.
Сначала вычисляется самое правое выражение 2 + 2, и затем
результат присваивается переменным слева: c,b и a. В 
конце у всех переменных будет одно значение. */
let a, b, c;
a = b = c = 2 + 2;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4