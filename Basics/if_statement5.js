/* Оператор сравнения "age > 18" выполняется первым в любом случае
(нет необходимости заключать его в скобки) */
age = 27;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed); // true

/* Использование условия с применением скобок более предпочтительнее,
потому что оно легче для восприятия, понятнее. */