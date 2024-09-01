/* Иногда нам нужно определить переменную в зависимости от условия */
let accessAllowed;
let age = 27;

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);