/* Две нижеследующие конструкции идентичны. */

function pow(x,n) {
    if (n < 0) {
        console.log("Отрицательные значения 'n' не поддерживаются");
    } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return console.log(result);
    }
}

pow(2,5);