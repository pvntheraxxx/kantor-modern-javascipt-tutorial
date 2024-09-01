/* Пример использования "this" в стрелочной функции: */

let dog = {
    breed: "Golden Retriever",
    showBreed() {
        let innerFunction = () => {
            console.log(this.breed);
        };
        innerFunction();
    },
};

dog.showBreed(); // "Golden Retriever"