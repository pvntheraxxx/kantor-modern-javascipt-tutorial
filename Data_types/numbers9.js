/* Можно ли обойти проблему с точностью? Конечно,
наиболее надёжный способ - то округлить результат
используя метод toFixed(n) : */

const sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30

const sum1 = 0.1 + 0.2;
console.log(sum.toFixed(1)); // 0.3

/* Метод toFixed(n) округляет дробное число до n
знаков после запятой. Метод toFixed(n) возвращает
строку. */