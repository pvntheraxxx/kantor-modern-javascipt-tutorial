/* Почему бы не использовать одинаковые переменные внутри 
и снаружи функции? Это просто и не требует придумывать новых
имён. */

let user = authenticateUser();

function render() {
    let user = anotherValue();

    // Много букв
    // <-- Программист захочет внести исправления сюда, и ...
}