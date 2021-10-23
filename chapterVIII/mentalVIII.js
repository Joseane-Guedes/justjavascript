/* let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
  };

  let john = {
    surname: 'Watson',
    address: sherlock.address
  };

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log(sherlock.surname); // Holmes
console.log(sherlock.address.city); // Malibu
console.log(john.surname); // Lennon
console.log(john.address.city); // Malibu */
/* 
let president = {
    name: 'Pooh',
    next: null,
  };
  
  president.next = {
    name: 'Paddington',
    next: president,
  };

  console.log(president.next.next.next.name); */

  let station = {
    Owner: { name: 'Fred' },
  };
  let name = station.owner.name;
  console.log(name  === station.Owner.name);


