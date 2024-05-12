//define a function to print each megician name from an array 
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//to add the graet word before array's value
function make_great(megicians) {
    return megicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array containig megicians name 
var megicians_name = ['harry poter', 'momina', 'khan'];
// making  a copy of original array through slice() function 
var copy_megicians = megicians_name.slice();
//modify the copied array to include "the great " with thier names
var copy_great_megicians = make_great(copy_megicians);
//show both arrays both original and copied 
//orignal
show_megicians(megicians_name);
//copied
show_megicians(copy_great_megicians);
