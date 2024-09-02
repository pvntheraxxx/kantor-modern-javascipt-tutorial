/* Выделить число */

function extractCurrencyValue (str) {
    // Удаляем символ валюты и преобразуем оставшуюся строку в число
    return parseFloat(str.replace(/[^0-9.,]/g,''));
};

// Примеры использования 
console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("€45.50"));
console.log(extractCurrencyValue("£100.99"));