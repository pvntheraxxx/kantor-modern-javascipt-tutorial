/* Усечение строки */

function truncate(str,maxlength) {
    // Проверяем длину строки
    if (str.length > maxlength) {
        // Усечённая строка с добавлением '...'
        return str.slice(0, maxlength - 1) + '...';
    };
    // Если длина строки не превышает maxlength,
    // возвращает строку без изменений
    return str;
};

console.log(truncate('Hello world!',10)); // Hello wor...
console.log(truncate('Short text',20)); // Short text
console.log(truncate('JavaScript',6)); // Java...