//define a function to print each megician name from an array 

function show_megicians(megicians : string[]){
    megicians.forEach(name => console.log(name));
}
//to add the graet word before array's value
function make_great (megicians : string[]){
    return megicians.map(name => `The Great ${name}`);
}

//define an array containig megicians name 
let megicians_name = [ 'harry poter','momina','khan']

//call the function makegreat to modify megicians names

let graet_megicians = make_great (megicians_name);

console.log(graet_megicians)
//call to show modified megicians name .
show_megicians(graet_megicians);