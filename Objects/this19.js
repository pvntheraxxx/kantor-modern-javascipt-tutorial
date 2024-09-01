/* "this" в методах стрелочных функций */

let obj = {
    name: "John",
    greet() {
        let inner = () => {
            console.log(this.name);
        };
        inner();
    },
};

obj.greet(); // "John"