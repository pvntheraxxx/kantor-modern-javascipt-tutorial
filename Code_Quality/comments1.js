/* Рецепт: выносите код в функции. Иногда выгодно 
заменить часть кода функцией, например, в таком
случае: */

function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {
        // проверяем, является ли i простым числом
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}