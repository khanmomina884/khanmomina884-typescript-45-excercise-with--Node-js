var guests = ['a', 'b', 'c', 'd'];
var cantcome = guests[1];
console.log(cantcome, ' cant come tonight');
guests.splice(0, 1, 'e');
console.log(guests);
guests.forEach(function (items) { return console.log("".concat(items, " you all still invited for tonight .")); });
