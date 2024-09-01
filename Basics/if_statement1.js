let year = 2015;

if (year == 2015)
{
    console.log("It's right!");
}
else 
{
    console.log("No, that's wrong")
}

if (0) { // 0 это "Неверно"
    // Этот код никогда не выполнится, потому что 0
}

if (1) { // 1 это "Истина"
    // Этот код выполнится всегда
    console.log("В условии единица")
}


let year1 = 2015;
let condition = (year1 == 2015); // преобразуется к true или false
if (condition) {
    console.log("Ура, year1 равно", year1);
}