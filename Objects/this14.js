/* Цепь вызовов. Решение состоит в том, чтобы
возвращать сам объект из каждого вызова. */

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
    test() {
        return this;
    }
};

ladder
.up()
.up()
.down()
.showStep() // 1
.down()
.showStep(); // 0

// такая цепочка вызовов
// эквивалентна следующему коду:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down(); 
ladder.showStep(); // 0

// это просто два возможных решения

console.log(ladder.test());