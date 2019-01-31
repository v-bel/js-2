// Drink
var MenuItem = require('./MenuItem').MenuItem;

function Drink(type) {
  MenuItem.call(this);
  this.type = type;
  this.price = type.price;
  this.calories = type.calories;
}

Drink.prototype = Object.create(MenuItem.prototype);
Drink.prototype.constructor = Drink;

Drink.prototype.getType = function() {
  return this.type;
};

module.exports.Drink = Drink;