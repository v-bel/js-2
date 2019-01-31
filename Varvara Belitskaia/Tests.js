// Menu
var Hamburger = require('./Hamburger').Hamburger;
var Salad = require('./Salad').Salad;
var Drink = require('./Drink').Drink;

Hamburger.SIZE_SMALL = { name: 'small hamburger', price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { name: 'big hamburger', price: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

Salad.CAESAR = { name: 'Caesar salad', price: 100, calories: 20 };
Salad.OLIVIER = { name: 'Olivier salad', price: 50, calories: 80 };

Drink.COKE = { name: 'coke', price: 50, calories: 40 };
Drink.COFFEE = { name: 'coffee', price: 80, calories: 20 };

// Tests
var Order = require('./Order').Order;

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