//////////////////////// TOPPINGS TEST SPECS ////////////////////////////////////

describe('Topping', function() {
    it("creates a topping for a pizza", function() {
        var testTopping = new Topping("cheese");
        expect(testTopping.toppingType).to.equal("cheese");
    });
});


//////////////////////// PIZZA TEST SPECS  ///////////////////////////////////////
describe('Pizza', function() {
// NO toppings
    it("creates a pizza object with no toppings on it", function() {
        var testPizza = new Pizza("small", "plain",[], 8.00);
        expect(testPizza.toppings).to.eql([]);
        expect(testPizza.pizzaCost).to.equal(8.00);
        expect(testPizza.pizzaSize).to.equal("small");
        expect(testPizza.pizzaType).to.equal("plain");
    });

// 1 topping
    it("creates a pizza object with 1 topping on it", function() {
        var pepperoni = new Topping("pepperoni");
        var testPizza = new Pizza("large", "cheese",[pepperoni], 15.00);
        expect(testPizza.toppings).to.eql([pepperoni]);
        expect(testPizza.pizzaCost).to.equal(15.00);
        expect(testPizza.pizzaSize).to.equal("large");
        expect(testPizza.pizzaType).to.equal("cheese");
    });
// with 1+ toppoings
    });
    it("calculates pizza total with 3 toppings", function() {
        var pepperoni = new Topping("pepperoni");
        var poo = new Topping("cheese");
        var artichoke = new Topping("veggie");
        var testPizza = new Pizza("small", "plain",[pepperoni, cheese, veggie]);
        testPizza.calculatePizzaCost();
        expect(testPizza.pizzaCost).to.equal(10.00);
    });
});

//////////// ORDER TEST SPECS  //////////////////////////////////////////////////
describe('Order', function() {
    it("creates an order for a new pizza", function() {
        var testPizza = new Pizza("medium", "veggie", [], 12.00);
        var testOrder = new Order([testPizza],12.00);
        expect(testOrder.cartItems).to.eql([testPizza]);
        expect(testOrder.orderTotal).to.equal(12.00);
    });

    it("tests total price of pizzas currently in cart", function() {
        var bbqChicken = new Pizza("small", "pepperoni", [], 10.00);
        var plain = new Pizza("medium", "cheese", [], 15.00);
        var testOrder = new Order([bbqChicken, plain]);
        testOrder.calculateTotal();
        //total
        expect(testOrder.orderTotal).to.equal(25.00);
    });

    it("tests the customers total cart price WITH total pizza price functions", function() {
        var topping1 = new Topping("test");
        var topping2 = new Topping("test");
        var bbqChicken = new Pizza("small", "cheese", [topping1, topping2]);
        var plain = new Pizza("large", "plain", [topping1]);
        var testOrder = new Order([cheese, plain]);
        bbqChicken.calculatePizzaCost();
        plain.calculatePizzaCost();
        testOrder.calculateTotal();
        expect(testOrder.orderTotal).to.equal(30.00);
    });
});
