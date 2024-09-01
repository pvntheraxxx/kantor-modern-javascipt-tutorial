/* Возможно использовать return и без значения. Это приведёт
к немедленному выходу из функции. Например: */

let age = 9;

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return console.log("А родители разрешили?");
    }
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log("Вам показывается кино"); // (*)
}

showMovie(1); // А родители разрешили?
showMovie(19); // Вам показывается кино