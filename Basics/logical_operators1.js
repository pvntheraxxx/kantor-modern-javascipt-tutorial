/* Если значение не логического типа, то оно 
к нему приводится в целях вычислений. Например,
число 1 будет воспринято как true, а 0 - как false */

if (1 || 0) { // работает как if ( true || false )
    console.log("true!");
}