/* Стрелочные функции */

// выражение в правой части
let sum1 = (a,b) => console.log(a + b);

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum2 = (a,b) => {
    // ..
    return console.log(a + b);
}

// без аргументов
let sayHi = () => console.log("Привет (без аргументов)");

// с одним аргументом
let double = n => console.log(n * 2);

sum1(1,1); // 2
sum1(2,2); // 4
sum1(3,3); // 6

sum2(1,1); // 2 
sum2(2,2); // 4
sum2(3,3); // 6

sayHi(); // "Привет (без аргументов)"
double(2); // 4 (n = 2 and n * 2 equal 4)