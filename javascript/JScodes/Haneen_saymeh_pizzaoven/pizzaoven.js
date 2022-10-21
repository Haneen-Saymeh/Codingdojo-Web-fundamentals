function pizzaoven(CrustType, SauceType,cheeses,toppings){
    var pizza ={};
    pizza.CrustType = CrustType;
    pizza.SauceType = SauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

pizza1 = pizzaoven("deep dish", "traditional", ["mozarella"],["pepperoni","sausage"]);
console.log(pizza1);

pizza2 = pizzaoven("hand tossed", "marinara",["mozarella","feta"], ["mushrooms","olives","onions"]);
console.log(pizza2);

pizza3 = pizzaoven("deep dish", "traditional", ["mozarella"],["pepperoni","onions"]);
console.log(pizza3);

pizza4 = pizzaoven("hand tossed", "marinara",["mozarella","feta"], ["corn","olives"]);
console.log(pizza4);


