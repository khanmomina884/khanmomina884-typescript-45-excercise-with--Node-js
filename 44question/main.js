//define a function with a rest parameter that accept items arguments representing our same
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('\n making a sandwich the following items: \n ');
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log('\n Now enjoy Sandwich');
}
//call the funcion 3 times with 3 diffrent number of arguments
make_sandwich('chicken', 'cheese', 'mayu', 'egg');
make_sandwich('bread', 'butter');
make_sandwich('bread', 'butter', 'tomato', 'cheese', 'egg', 'chicken', 'lettuce');
