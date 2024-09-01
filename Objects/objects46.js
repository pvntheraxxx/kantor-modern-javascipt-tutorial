/* Например, мы можем использовать Object.assign() для
объединения нескольких объектов в один: */

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 
// и permissions2 в "user"
Object.assign(user, permissions1, permissions2);

/*
    теперь user = { 
        name: "John",
        canView: true,
        canEdit: true,
    };
*/