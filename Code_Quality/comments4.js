/* Будет лучше отрефакторить его с использованием функций: */

addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
    for (let i = 0; i < 10; i++) {
        let drop = getWhiskey();
        // ...
    }
}

function addJuice(container) {
    for (let t = 0; t < 3; t++) {
        let tomato = getTomato();
        // ...
    }
}