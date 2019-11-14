import { Pizza } from './../src/new-pizza.js';

describe('Pizza',() => {

  test('should determine if toppings length is greater than or equal to three', () => {
  var newlength = new Pizza(0,0,0,4);
  expect(newlength.toppings.length).toEqual(newlength.price + 1);
  });
});
