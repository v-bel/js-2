// Hamburger
var MenuItem = require('./MenuItem').MenuItem;

function Hamburger(size, stuffing) {
  MenuItem.call(this);
  // composition
  this.size = new MenuItem(size.price, size.calories);
  this.stuffing = new MenuItem(stuffing.price, stuffing.calories);
  this.price = size.price + stuffing.price;
  this.calories = size.calories + stuffing.calories;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getSize = function() {
  return this.size;
};

Hamburger.prototype.getStuffing = function() {
  return this.stuffing;
};

module.exports.Hamburger = Hamburger;