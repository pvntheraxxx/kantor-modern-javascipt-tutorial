/* Поведение null и undefined при сравнении с другими значениями
- особое: */

// При строгом равенстве === 
console.log("null === undefined equals ", null === undefined); // false

// При нестрогом равенстве ==
console.log("null == undefined equals ",null == undefined); // true

/* Странный результат сравнения null и 0 */
console.log("null > 0 equals ", null > 0); // (1) false
console.log("null == 0 equals ", null == 0); // (2) false
console.log("null >= 0 equals ", null >= 0); // (3) true