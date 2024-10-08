/* Вывести простые числа. Натуральное число, большее 1,
называется простым, если оно ни на что не делится,
кроме себя и 1. Другими словами, n > 1 - простое, если при
его делении на любое число кроме 1 и n есть остаток. 
Например, 5 это простое число, оно не может быть разделено без 
остатка на 2,3 и 4. Напишите код, который выводит все
простые числа из интервала от 2 до n. Для n = 10 результат
должен быть 2,3,5,7. */

/*
Для всех i от 1 до 10 {
    проверить, делится ли число i на какое-либо из чисел до него
    если делится, то это i не подходит, берём следующее
    если не делится, то i - простое число
} */

let n = 10;

nextPrime: 
for (let i = 2; i <= n; i++) { // Для всех i...
    for (let j = 2; j < i; j++) { // Проверить, делится ли число
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }
    console.log(i);
}