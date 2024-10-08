/* Мы можем скопировать функцию в другую переменную */

function sayHi() { // (1) создаём
    console.log("Привет!");
}

let func = sayHi; // (2) копируем 

func(); // Привет // (3) вызываем копию (работает)!
sayHi(); // Привет // эта тоже всё ещё работает (почему бы и нет)

/* Разберём подробно всё, что здесь произошло:
1. Объявление Function Declaration (1) создаёт функцию и
помещает её в переменную с именем sayHi.
2. В строке (2) мы скопировали её значение в переменную func.
Обратите внимание (ещё раз): нет круглых скобок после sayHi. 
Если бы они были, то выражение func = sayHi() записало бы результат
вызова sayHi() в переменную func, а не саму функцию sayHi.
3. Теперь функция может вызываться как sayHi(), так и func(). 
*/