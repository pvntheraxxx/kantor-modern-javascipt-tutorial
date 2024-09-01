/* Мы можем задать before/after функции, которые будут 
выполняться до/после тестов, а также функции beforeEach/afterEach,
выполняемые до/после каждого it. Например: */

describe("тест", function() {
    before(() => alert("Тестирование началось - перед тестами"));
    after(() => alert("Тестирование закончилось - после всех тестов"));

    beforeEach(() => alert("Перед тестом - начинаем выполнять тест"));
    afterEach(() => alert("После теста - заканчиваем выполнение теста"));

    it('тест 1', () => alert(1));
    it('тест 2', () => alert(2));
});