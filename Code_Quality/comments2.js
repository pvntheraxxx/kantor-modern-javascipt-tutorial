/* Лучший вариант - использовать отдельную функцию isPrime: */

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/* Теперь код легче понять. Функция сама становится комментарием.
Такой код называется самодокументированным. */