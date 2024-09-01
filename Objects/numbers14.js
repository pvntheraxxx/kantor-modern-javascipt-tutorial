/* Второй аргумент parseInt(str,radix) */

console.log(parseInt('0xff',16)); // 255
console.log(parseInt('ff',16)); // 255, без 0x тоже работает

console.log(parseInt('2n9c',36)); // 123456