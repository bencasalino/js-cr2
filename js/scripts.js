function Topping(toppingType) {
    this.toppingType = toppingType;
}

// Pizza
function Pizza(pizzaSize, pizzaType, toppings, pizzaCost) {
    "use strict";
    this.pizzaSize = pizzaSize;
    this.pizzaType = pizzaType;
    this.toppings = toppings;
    this.pizzaCost = pizzaCost;
}
////////////////////////pizza prototype /////////////////////////////////////////
Pizza.prototype.calculatePizzaCost = function() {
    var cost = 0;
    if (this.pizzaSize === "small") {
        cost += 1;
    } else if (this.pizzaSize === "medium") {
        cost += 2;
    } else if (this.pizzaSize === "large") {
        cost += 3;
    }
    //calclulate cost for each topping at this spot
    for (var topping in this.toppings) {
        cost += 1;
    }
    this.pizzaCost = cost;
};

// Order
function Order(cartItems, orderTotal) {
    "use strict";
    this.cartItems = cartItems;
    this.orderTotal = orderTotal;
}
////////////////////////////// order prototype /////////////////////////////////
Order.prototype.calculateTotal = function() {
    // order starts at 0
    var pizzaTotal = 0;
    for (var pizzaIndex in this.cartItems) {
        pizzaTotal += this.cartItems[pizzaIndex].pizzaCost;
    }
    this.orderTotal = pizzaTotal;
};


//document ready (don't do anything until all the HTML is on the page)
//when the form is submitted, get each value out of it
//use those values to create Topping(s), Pizza(s), and the Order
//display the total cost
