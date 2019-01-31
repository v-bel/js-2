// Order
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

module.exports.Order = Order;