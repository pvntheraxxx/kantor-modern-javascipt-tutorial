let user = { name: "Sasha" };
console.log(user);

// присваиваем значения свойству
user["likes birds"] = true;
console.log(user);

// получение значения свойства
console.log(user["likes birds"]); // true 

// удаление свойства
delete user["likes birds"];
console.log(user);