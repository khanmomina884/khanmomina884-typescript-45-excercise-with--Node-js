var guests = ['a', 'b', 'c', 'd'];
var cantcome = guests[1];
console.log(cantcome, ' cant come tonight');
guests.splice(0, 1, 'e');
console.log(guests);
guests.forEach(function (items) { return console.log("".concat(items, " you all still invited for tonight .")); });
guests.unshift('f');
console.log(guests);
guests.push('y');
console.log(guests);
var middleIndex = guests.length / 2;
guests.splice(middleIndex, 2, 'z');
console.log(guests);
