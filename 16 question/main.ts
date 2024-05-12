let guests = ['a','b','c','d'];
let cantcome = guests[1]
console.log(cantcome, ' cant come tonight');


guests.splice(0,1,'e');
console.log(guests);

guests.forEach(items => console.log(`${items} you all still invited for tonight .`));

guests.unshift('f');
console.log(guests)
guests.push('y');
console.log(guests)
 
let middleIndex = guests.length/2;
guests.splice(middleIndex, 2,'z');
console.log(guests)