// Define a funcyion to create a car object with optison...
function create_car(manufacturer , model, ...options){

    //initialize a car object with manufacturer and model
    let car = {
         manufacturer : manufacturer,
         model : model,
    };
 
 //add aditional options to the car objects 
 options.forEach(option => {
 let [key ,value ] = option.split(':')
 car[key.trim]= value.trim();
 })
 return car ;
 }
 //call the function to creat the car object 
 let my_car = create_car('toyota','corola','color : black ','sunroof : true');
 
 //print the variable to ensure all the information is stored correctly in the car object 
 console.log(my_car);
 