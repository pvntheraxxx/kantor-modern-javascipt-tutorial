/* Такое описание называется спецификацией (specification). Она
содержит описания различных способов использования и 
тесты для них, например: */

/**
 * 
 * @param {number} a Первое параметр
 * @param {number} b Второй параметр
 * @returns {number} Результат работы функции
 */

function pow(a,b) {
    return console.log(a + b);
}

describe("pow", function() {
    it("возводит в степень n", function() {
        assert.equal(pow(2,3),8);
    });
});