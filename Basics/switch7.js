/* Напишите "if", аналогичный "switch". Если совсем точно
следовать работе switch, то if должен выполнять строгое
сравнение '==='. Впрочем, для таких строк, подойдёт и обычное
сравнение '=='. */

browser = "Chrome";

if (browser == "Edge") {
    console.log("You've got the Edge!");
} else if (browser == "Chrome" 
        || browser == "Firefox"
        || browser == "Safari"
        || browser == "Opera") {
    console.log("Okay we support these browsers too");
} else {
    console.log("We hope that this page looks ok!");
}

/* Вывод: чтобы проверять условия на соответствие множеству
различных значений, можно использовать оператор ||
много раз подряд, перечисляя все варианты значения выражений.
Обратите внимание: конструкция browser == "chrome" ||
browser == "Firefox"... разбита на несколько строк для
лучшей читаемости. Но всё равно запись через switch
нагляднее. */