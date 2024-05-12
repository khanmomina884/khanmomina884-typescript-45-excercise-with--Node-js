//define a function with a rest parameter that accept items arguments representing our same


function make_sandwich(... items : string[])
{console.log('\n making a sandwich the following items: \n ');
items.forEach(singleitem => console.log(singleitem));

console.log('\n Now enjoy Sandwich');
}
//call the funcion 3 times with 3 diffrent number of arguments

make_sandwich('chicken','cheese','mayu','egg');

make_sandwich('bread','butter');

make_sandwich('bread','butter','tomato','cheese','egg','chicken','lettuce');