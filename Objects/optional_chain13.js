/* Мы можем использовать ?. для безопасного чтения и удаления,
но не для записи. Опциональная цепочка ?. не имеет смысла в 
левой части присываивания. Например: */

let user = null;
user?.name = "John"; // ошибка, не работает
// то же самое что написать undefined = "John"