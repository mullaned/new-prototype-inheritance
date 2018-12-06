//constructor function
function Dog(name, age){
    this.name = name;
    this.age = age;

    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

rusty.bark();

//----------------------------------------------------

//multiple constructors refactor using call and apply

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

//motorcycle constructor can be refactored using call
function Motorcycle(make,model,year){
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

//motorcycle can also be refactored using apply
function Motorcycle(make,model,year){
    Car.apply(this,[make, model, year]);
    this.numWheels = 2;
}

//can also use arguments property
function Motorcycle(){
    Car.apply(this, arguments);
    this.numWheels = 2;
}

//---------------------------------------------


// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.multiplyFavoriteNumber = function(number){
        return number * this.favoriteNumber;
    }
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.



// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

//Child refactored
function Child(){
    Parent.apply(this, arguments);
}