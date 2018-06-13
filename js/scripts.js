'use strict';

function Phone(brand, price, color, memory, premiere) {
    this.brand = brand;
    //by using this, the "brand" property of the object we create will assume the value of the brand argument
    this.price = price;
    this.color = color;
    this.memory = memory;
    this.premiere = premiere;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". This phone has " + this.memory + " of memory. Its premiere took place in a year " + this.premiere);
}

var iPhone6S = new Phone("Apple", 2250, "silver", "16GB", 2015);
var GalaxyS6 = new Phone("Samsung", 1300, "black", "32GB", 2015);
var OnePlusOne = new Phone("OnePlus", 1600, "white", "16GB", 2015);

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();