/* Операции с массивами */

let styles = [ 'Джаз', 'Блюз' ];

styles.push('Рок-н-ролл');
console.log(styles); // [ 'Джаз', 'Блюз', 'Рок-н-ролл' ]

// for (let i = 0; i < styles.length; i++ ) {
//     if (i = styles[1]) {
//         styles[1] = "Классика";
//     }
// }

// for (let i = 0; i < styles.length; i++) {
//     styles[1] = "Классика";
// }
// console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

styles.shift();
console.log(styles);

styles.unshift('Рэп','Рэгги');
console.log(styles);