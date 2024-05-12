// Define a funcyion to create a car object with optison...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add aditional options to the car objects 
    options.forEach(function (option) {
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key.trim] = value.trim();
    });
    return car;
}
//call the function to creat the car object 
var my_car = create_car('toyota', 'corola', 'color : black ', 'sunroof : true');
//print the variable to ensure all the information is stored correctly in the car object 
console.log(my_car);
