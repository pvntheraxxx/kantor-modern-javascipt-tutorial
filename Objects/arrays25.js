// после того, как [] был преобразован в ''

console.log(0 == ''); 
// true, т.к. '' преобразуется в число 0

console.log('0' == ''); 
// false, нет преобразования типов, разные строки

/* Так как же сравнивать массивы? Это просто:
не используйте оператор ==. Вместо этого сравните их
по элементам в цикле или используя методы итерации */