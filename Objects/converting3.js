/* Если метод Symbol.toPrimitive существует, он используется
для всех хинтов, и больше никаких методов не требуется. */

let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
};

// демонстрация результатов преобразований:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

/* Вывод: как мы можем видеть из кода, user становится 
либо строкой со своим описанием, либо суммой денег в 
зависимости от преобразования. Единый метод 
user[Symbol.toPrimitive] обрабатывает все случаи
преобразования. */