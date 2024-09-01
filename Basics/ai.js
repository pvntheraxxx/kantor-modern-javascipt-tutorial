function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Проверяем делимость на 2 и 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Проверяем делимость на другие числа до корня из num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Пример использования:
const n = 50; // можно задать любое значение
printPrimes(n);
