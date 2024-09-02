/* Усечение строки */

function truncate(str,maxLength) {
    if (
        typeof str != 'string' || 
        typeof maxLength !== 'number' || 
        maxLength < 1) {
            throw new Error('Неверные параметры');
    };

    if (str.length > maxLength) {
        return str.slice(0,maxLength - 1) + '...';
    };

    return str;
}

// Примеры использования 
console.log(truncate('Hello world',5)); // Hell... 
console.log(truncate('Moscow', 3)); // Mo...
console.log(truncate('Hello',20)); // Hello