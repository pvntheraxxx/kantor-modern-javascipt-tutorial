/* Сделать первый символ заглавным */

function ucFirst(str) {
    if (!str) return str;   
    console.log(str.at(0).toUpperCase() + str.slice(1));
};

ucFirst("man");
ucFirst("hello");
ucFirst("claps");