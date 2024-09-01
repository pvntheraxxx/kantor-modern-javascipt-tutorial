/* Значения по умолчанию. Если при вызове функции аргумент не был
указан, то его значением становится undefined. Например, вышеупомянутая
функция showMessage(from,text) может быть вызвана с 
одним аргументом: */

function showMessage(from,text) {
    console.log(from + ": " + text);
}
showMessage("Аня");

/* Вывод: если какие-либо параметры из функции не были указаны
в качестве аргументов, то эти параметры принимают значение undefined. */