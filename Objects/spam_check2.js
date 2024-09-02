/* Проверка на спам */

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));