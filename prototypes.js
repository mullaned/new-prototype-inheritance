//prototype example

//constructor function
function Person(name){
    this.name = name;
}

//objects created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

//since we used the new keyword, we have established a link between the object and the prototype property, we can access that using __proto__ (dunder proto)
elie.__proto__ === Person.prototype; //true
colt.__proto__ === Person.prototype; //true

//The Person.prototype object also has a property called constructor which points back to the function
Person.prototype.constructor === Person;  //true


//Adding to the prototype
Person.prototype.isInstructor = true;

elie.isInstructor; //true
colt.isInstructor; //true

//-------------------------------------------

function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep!";
    }
}

//------------------------------------------------


// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.family = [];

}

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}


// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.



/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person)
    }
    return this.family.length;
}

// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

Array.prototype.map = function(callback){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
      newArr.push(callback(this[i], i, this))
    }
    return newArr;
  }


/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/


String.prototype.reverse = function(){
    var newStr = '';
    for(var i = this.length -1; i >= 0; i--){
      newStr += this[i]
    }
    return newStr;
  }

  //---------------------------------------------------

  //Inheritance


  // 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

  function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

}

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

Vehicle.prototype.start = function(){
    return "VROOM!"
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

Vehicle.prototype.toString = function(){
    return 'The make, model and year are ' + this.make + ' ' + this.model + ' ' + this.year;
}

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

function Car(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

function Motorcycle(make,model,year){
    Vehicle.apply(this, arguments)
    this.numWheels = 2;
  }
  
  Motorcycle.prototype = Object.create(Vehicle.prototype);
  Motorcycle.prototype.constructor = Motorcycle;