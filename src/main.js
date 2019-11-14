import $ from 'jquery';
import 'bootstrap';
import './styles.css';
// import img from '/src/img/order-background.png';
import { Pizza } from './../src/new-pizza.js';

$(document).ready(function() {
  $('form#order-pizza').submit(function(e) {
    e.preventDefault();
    let sizeInput = $('input[name=size]:checked').val();
    let crustInput = $('input[name=crust]:checked').val();
    let sauceInput = $('input[name=sauce]:checked').val();
    let toppings = [];
    let toppingsInput = $('input[name=toppings]:checked').each(function() {
      toppings.push($(this).val());
    });
    let userPizza = new Pizza(sizeInput, crustInput, sauceInput, toppings)
    userPizza.calculatePrice(userPizza.price);

    $('#order-size').html(userPizza.sizeInput);
    $('#order-crust').html(userPizza.crustInput);
    $('#order-sauce').html(userPizza.sauceInput);
    $('#order-toppings').html(userPizza.toppings.join(", "));
    $('#order-price').html(userPizza.price);

    $("#second-order").slideToggle();
    $('#order-summary').slideToggle();

    console.log(userPizza);
  });
  $(function() {
    $("#nextButton").click(function() {
      $("#first-order").slideToggle();
      $("#second-order").slideToggle();
    });
    $(function() {
      $("#backButton").click(function() {
        $("#second-order").slideToggle();
        $("#first-order").slideToggle();
      });
    });
  });
});
