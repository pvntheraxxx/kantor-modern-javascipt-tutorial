/* Проверка на спам */

function checkSpam(str) {
    // Приводим строку к нижнему регистру, чтобы игнорировать регистр символов
    let lowerStr = str.toLowerCase();

    // Проверяем наличие "viagra" или "xxx"
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};

// Примеры использования
console.log(checkSpam('Buy ViAgRa now!')); // true
console.log(checkSpam('Free xxx videos')); // true
console.log(checkSpam('Hello world!')); // false