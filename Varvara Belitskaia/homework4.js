// Menu
Hamburger.SIZE_SMALL = { name: 'small hamburger', price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { name: 'big hamburger', price: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

Salad.CAESAR = { name: 'Caesar salad', price: 100, calories: 20 };
Salad.OLIVIER = { name: 'Olivier salad', price: 50, calories: 80 };

Drink.COKE = { name: 'coke', price: 50, calories: 40 };
Drink.COFFEE = { name: 'coffee', price: 80, calories: 20 };

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

// Hamburger
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

// Salad
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

// Drink
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

function Order() {
  this.args = [].slice.call(arguments);
  this.isPaid = false;
}

Order.prototype.getOrder = function() {
  return this.args;
};

Order.prototype.getPaymentInfo = function() {
  return this.isPaid;
};

Order.prototype.addPosition = function(position) {
  if (!this.isPaid) {
    this.args.push(position);
  } else {
    console.log('You have already paid for the order');
  }
};

Order.prototype.removePosition = function(position) {
  if (!this.isPaid) {
    this.args.splice(this.args.indexOf(position), 1);
  } else {
    console.log('You have already paid for the order');
  }
};

Order.prototype.pay = function() {
  if (!this.isPaid) {
    this.isPaid = true;
    Object.freeze(this);
  } else {
    console.log('You have already paid for the order');
  }
};

Order.prototype.calculateTotalPrice = function() {
  return this.args.reduce(function(totalPrice, position) {
    return totalPrice + position.calculatePrice();
  }, 0);
};

Order.prototype.calculateTotalCalories = function() {
  return this.args.reduce(function(totalCalories, position) {
    return totalCalories + position.calculateCalories();
  }, 0);
};

// Tests
var bigHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
var smallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
var olivierSalad = new Salad(Salad.OLIVIER, 150);
var caesarSalad = new Salad(Salad.CAESAR, 50);
var coffee = new Drink(Drink.COFFEE);

var order = new Order(bigHamburger, smallHamburger, olivierSalad, coffee);

order.calculateTotalPrice();
order.calculateTotalCalories();
order.removePosition(bigHamburger);
order.addPosition(caesarSalad);
order.getOrder();
order.calculateTotalPrice();
order.calculateTotalCalories();
order.pay();
order.removePosition(coffee);
