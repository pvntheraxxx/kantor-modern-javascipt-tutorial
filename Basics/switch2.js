/* Если break нет, то выполнение пойдёт ниже по следующим case,
при этом остальные проверки игнорируются. */
let a = 2 + 2;

switch (a) {
    case 3:
    console.log("Маловато");
    case 4:
    console.log("В точку!");
    case 5: 
    console.log("Перебор");
    default: 
    console.log("Нет таких значений");
}

/* Здесь выполняются все case, потому что 
отсутствуют инструкции break */