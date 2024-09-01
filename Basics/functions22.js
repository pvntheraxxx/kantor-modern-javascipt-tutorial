/* Второй вариант использует дополнительную функцию isPrime(n)
для проверки на простое: */

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i); // простое
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/* Вывод: допустимо создавать функции, даже если мы не планируем повторно
использовать их. Такие функции структурируют код и делают его более
понятным. */