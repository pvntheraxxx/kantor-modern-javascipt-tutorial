/* Использование параметров по умолчанию в ранних версиях 
JavaScript. Ранние версии JavaScript не поддерживали параметры
по умолчанию. Поэтому существуют альтернативные способы, которые
могут встречаться в старых скриптах. Например, явная проверка
на undefined: */

function showMessage(from,text) {
    if (text == undefined) {
        text = "текст не добавлен";
    } 
    console.log(from + ": " + text);
}

/* Вывод: можно создавать явные проверки на undefined */