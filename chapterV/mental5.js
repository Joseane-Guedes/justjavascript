/* https://floating-point-gui.de/formats/fp/
Basic Answers
Why don’t my numbers, like 0.1 + 0.2 add up to a nice round 0.3, and instead I get a weird result like 0.30000000000000004?
Because internally, computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.

When the code is compiled or interpreted, your “0.1” is already rounded to the nearest number in that format, which results in a small rounding error even before the calculation happens.

recap✏
1 - Not all numbers can be perfectly represented in JavaScript.

2 - Numbers from invalid math operations like 1 / 0 or 0 / 0 are special;

3 - typeof(NaN) is a number because NaN is a numeric value;
*/

/* let meals = 4;
let wheels = meals;
let eels = 2 + 2;

console.log(meals)
console.log(wheels)
console.log(eels) */



/* let price = 100;
let offer = price + 1;
price = 200;

console.log(price)
console.log(offer) */

