/* Например, ?.() используется для вызова функций, которая может не существовать. В 
приведённом ниже коде у некоторых наших пользователей есть метод admin, а
у некоторых его нет: */

let userAdmin = {
    admin() {
        console.log("Я админ");
    },
};

let userGuest = {};

userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдёт (такого метода нет)