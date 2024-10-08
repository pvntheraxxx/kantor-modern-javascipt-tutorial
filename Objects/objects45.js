/* Чтобы создать независимую копию, нужно создать
новый объект и воспроизвести структуру сущесвтующего,
перебрав его свойства и скопировав их на примитивном 
уровне. */

let user = {
    name: "John",
    age: 30,
};

let clone = {}; // новый пустой объект 

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
};

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

console.log(user.name); // всё ещё John в первоначальном объекте
console.log(clone); // новый объект "clone"