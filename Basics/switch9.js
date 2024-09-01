/* Переписать условия "if" на "switch". Первые две проверки - это
обычный case, третья разделена на два case: */

const number = 5; // Число вне диапазона
 
switch (number) {
    case 0: 
        console.log("Вы ввели число 0");
        break;
    case 1: 
        console.log("Вы ввели число 1");
        break;
    case 2:
    case 3:
        console.log("Вы ввели число 2, а может и 3");
        break;
    default:
        console.log("Число вне диапазона!");
        break; // break внизу не обязателен, но ставится по "правилам хорошего тона"
}