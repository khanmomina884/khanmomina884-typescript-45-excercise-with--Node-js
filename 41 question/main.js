//define a function to print each megician name from an array 
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//define an array containig megicians name 
var megicians_name = ['harry poter', 'momina', 'khan'];
//call the function to print each megician name
show_megicians(megicians_name);
