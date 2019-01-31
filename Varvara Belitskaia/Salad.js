// Salad
var MenuItem = require('./MenuItem').MenuItem;

function Salad(type, weight) {
  MenuItem.call(this);
  this.type = type;
  this.weight = weight;
  this.price = (type.price / 100) * weight;
  this.calories = (type.calories / 100) * weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getType = function() {
  return this.type;
};

Salad.prototype.getWeight = function() {
  return this.weight;
};

module.exports.Salad = Salad;