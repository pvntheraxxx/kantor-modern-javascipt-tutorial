/* Перепишите 'if..else' в '?' с использованием нескольких 
операторов '?'. Для читаемости рекомендуется разбить код на несколько
строк. */

/* 
let message;
login = ""

if (login == "Сотрудник") {
    message = "Привет";
} else if (login == "Директор") {
    message = "Здравствуйте";
} else if (login == '') {
    message = "Нет логина";
} else {
    message = "Not found";
}

console.log(message); */

login = "root"
let message = (login == "Сотрудник") ? "Привет" :
(login == "root") ? "root" :
(login == "") ? "Нет логина" : "";
console.log(message);