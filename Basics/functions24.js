/* Функция min(a,b). Напишите функцию min(a,b), которая
возвращает меньшее из чисел a и b. Пример вызовов: */

/* Вариант решения с использованием "if": */
function min1(a,b) {
    if (a < b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

/* Вариант решения с оператором "?": */
function min2(a,b) {
    return a < b ? console.log(a) : console.log(b);
}

min1(2,6);
min1(3,-1); 
min1(1,1); 

min2(2,6);
min2(3,-1);
min2(1,1);

// P.S. В случае равенства a == b не имеет значения, что возвращать