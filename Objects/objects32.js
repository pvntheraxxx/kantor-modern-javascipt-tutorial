let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнёт выполняться, значит в объекте есть свойства
        return console.log(false);
    }
    return console.log(true);
};
isEmpty(schedule); // true

schedule["8:30"] = "get up";
isEmpty(schedule); // false


