/* Проверка на спам */

function checkSpam(str) {
    if (!str) return str;
    
    if (str.toLowerCase().includes("viagra".toLowerCase())) {
        return console.log("В строке присутствует спам: viagra");

    } else if (str.toLowerCase().includes("XXX".toLowerCase())) {
        return console.log("В строке присутствует спам: XXX");

    } else {
        return console.log("В строке отсутствует спам");
    }
};

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

checkSpam("my example");
checkSpam("my xxxmlxx");