// Menu item
function MenuItem(price, calories) {
  this.price = price;
  this.calories = calories;
}

MenuItem.prototype.calculatePrice = function() {
  return this.price;
};

MenuItem.prototype.calculateCalories = function() {
  return this.calories;
};

module.exports.MenuItem = MenuItem;