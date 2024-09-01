/* Условиями можно называть список фактов */ 

let hour = 12;
let isWeekend = 0;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("Офис закрыт."); // Это выходной
} else {
    console.log("Офис открыт."); 
}