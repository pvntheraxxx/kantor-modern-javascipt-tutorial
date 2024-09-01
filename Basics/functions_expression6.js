/* Function Expression в сравнении c Function Declaration */

/* Function Declaration: функция объявляется отдельной
конструкцией "function..." в основном потоке кода. */
function sum1(a,b) {
    return console.log(a + b);
}

/* Function Expression: функция, созданная внутри другого
выражения или синтаксической конструкции. В данном случае
функция создаётся в первой части "выражения присваивания" =: */
let sum2 = function(a,b) {
    return console.log(a + b);
}

sum1(1,1);
sum2(2,2);