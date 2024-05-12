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
//call the function to print each megician name
var graet_megicians = make_great(megicians_name);
console.log(graet_megicians);
show_megicians(graet_megicians);
