/* Конструкция "switch" */

let age = 18;

switch (age) {
    case 18: console.log("Так не работает");
    break
    case "18": console.log("А так сработает");
    break;
    default: console.log("Любое значение, неравное значению выше");
}