/* Например, если в приведённом выше коде заменить ?? на ||, то 
будет тот же самый результат: */
let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое истинное значение:
console.log(firstName || lastName || nickName || "Аноним"); // Суперкодер