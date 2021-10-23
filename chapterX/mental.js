/* let human = {
    teeth: 32
  };
  
  let gwen = {
    __proto__: human,
    age: 19
  };
  
  console.log(human.age); // indefined
  console.log(gwen.age); // 19
  
  console.log(human.teeth); // 32
  console.log(gwen.teeth); // 32
  
  console.log(human.tail); // error
  console.log(gwen.tail); // error */

/*   let lie = {
    taste: 'bitter'
  };
  
  let cake = {
    __proto__: lie
  };
  
  lie.taste = 'butter';

  console.log(lie)
  console.log(cake)
  console.log(lie.taste) */
/* 
  let spider = {
    legs: 8
  };
  
  let miles = {
    __proto__: spider
  };
  
  miles.legs = 2;


  console.log(spider.legs);
  console.log(miles);
  console.log(miles.legs)
 */
/* 
  let spider = {
    legs: 8
  };
  
  let miles = {
    __proto__: spider
  };
  
  let gwen = {
    __proto__: spider
  };
  
  miles.legs = 2;
  spider.legs = gwen.legs * 2;
  
  console.log(gwen.legs) // ???
 */

  let goose = {location: 'heaven'};
  let cheese = {location: 'hell'}
  // >>> Diagram this moment! <<<
  
  console.log(cheese === goose); // false
  console.log(cheese.location); // "heaven"
  
  goose.location = 'hell';
  console.log(cheese.location); // "hell"