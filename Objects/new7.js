/* Возврат значения из конструктора, return */

// здесь return замещает this, возвращая объект

function BigUser() {
    this.name = "John";
    return { name: "Godzilla" }; // <-- возвращает этот объект
};

console.log(new BigUser().name); // Godzilla, получили этот объект