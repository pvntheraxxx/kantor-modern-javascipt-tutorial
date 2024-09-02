/* Усечение строки */

function truncate(str,maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '...' 
        : str;
};

console.log(truncate('Hello world',5));
console.log(truncate('Moscow', 3));
console.log(truncate('Hello',20));