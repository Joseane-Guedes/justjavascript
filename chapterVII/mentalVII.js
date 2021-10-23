/* console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false */

/* let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry)); // false
console.log(Object.is(cherry, chocolate)); // false
console.log(Object.is(chocolate, banana)); // true */

/* 
console.log(2 === 2); // true
console.log({} === {}); // false */

/* 
Friendly reminder♾ 
NaN === NaN is false, although they are the same value.
-0 === 0 and 0 === -0 are true, although they are different values. */

/* Object.is(a, b) is true when variables a and b point to the same value on our diagram. */

/* let fingernails = 'mustache';
let toes = fingernails;
let nose = 'must' + 'ache';


console.log(fingernails)
console.log(toes)
console.log(nose) */

/* let tomato = {};
let oregano = tomato;
let potato = {};
tomato = {};
 */

/* 
let tea = function() {
    return 0 / 0;
  };
  let coffee = function() {
    return 0 / 0;
  };
  let matcha = tea();
  let latte = coffee();


 

