/* Усечение строки */

function truncate(str, maxLength) {   
    let strLength = str.length;

    if (strLength > maxLength) {
        return console.log(`${str.slice(0, maxLength)}` + '...');        
    } else if (strLength < maxLength) {
        return console.log(`В строке "${str}" меньше чем ${maxLength} символов`);
    } else {
        return console.log('Отсутствует один из параметров');
    }
};

truncate("Hello world!", 5); // Hello...
truncate("Moscow",3); // Mos...
truncate("Hello",20); // 20

truncate("Вот, что мне хотелось бы сказать на эту тему:", 19);
// Вот, что мне хотело...

truncate("Всем привет!", 20);
// Всем привет!

truncate('Hello world!',10);
truncate('Short text',20);
truncate('JavaScript',6);