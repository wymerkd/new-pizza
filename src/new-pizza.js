// Business Logic
export function Pizza(sizeInput, crustInput, sauceInput, toppings) {
  this.sizeInput = sizeInput;
  this.crustInput = crustInput;
  this.sauceInput = sauceInput;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  if (this.toppings.length >= 3){
    for (var i = 3; i < this.toppings.length; i++) {
      this.price += 1;
    }
  }
  if (this.sizeInput === 'small') {
    this.price += 8;
  } else if (this.sizeInput === 'medium') {
    this.price += 10;
  } else if (this.sizeInput === 'large') {
    this.price += 12;
  } else {
    return this.price
  }
  console.log(this.price)
}
