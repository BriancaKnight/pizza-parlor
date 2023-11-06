// Business Logic for Order -------

function Order() {
  this.pizzas = [];
  this.currentId = 0;
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.receipt = function () {
  let totalCost = 0;

  for (let i = 0; i < this.pizzas.length; i += 1) {
    totalCost += this.pizzas[i].cost();
  }
  return totalCost;
}

// Business Logic for Pizza -------

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  let baseCost = 10;
  let toppingsCost = this.toppings.length * 3;

  if (this.size === "x-large") {
    return baseCost + 15 + toppingsCost;
  } else if (this.size === "large") {
    return baseCost + 10 + toppingsCost;
  } else if (this.size === "medium") {
    return baseCost + 5 + toppingsCost;
  } else if (this.size === "small") {
    return baseCost + toppingsCost;
  }
};

// User Interface Logic
let order = new Order();


function listPizzas(orderDisplay) {
  let pizzasDiv = document.querySelector("div#pizzas");
  pizzasDiv.innerText = "";
  const ul = document.createElement("ul");
  orderDisplay.pizzas.forEach(function (pizza) {
    const li = document.createElement("li");
    li.innerText = "A " + pizza.size + " pizza with " + pizza.toppings.join(", ") + ". Total: $" + pizza.cost();
    pizzasDiv.appendChild(li);
  });
  pizzasDiv.append(ul);
}

function receiptCost() {
  let totalOrderCost = order.receipt();
  let totalCostDiv = document.querySelector("div#total-cost");
  totalCostDiv.innerText = "You owe: $" + totalOrderCost;
}

function deliverySubmission(e) {
  e.preventDefault();
  let address = document.getElementById("street-address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let deliveryInfoDisplay = document.createElement("div");
  let deliveryInfo = "Delivery to: " + address + ", " + city + ", " + state + " (FREE Delivery!)";

  deliveryInfoDisplay.innerText = deliveryInfo;
  document.querySelector("#total-cost").appendChild(deliveryInfoDisplay);
}

function handleSubmission(e) {
  e.preventDefault();

  let pizzaSize = document.querySelector('input[name="size"]:checked').value;
  let pizzaToppings = [];

  document.querySelectorAll('input[name="toppings"]:checked').forEach(function (checkbox) {
    pizzaToppings.push(checkbox.value);
  });

  let myPizza = new Pizza(pizzaToppings, pizzaSize);
  let pizzaCost = myPizza.cost();
  order.addPizza(myPizza);

  listPizzas(order);
  receiptCost();
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-selector").addEventListener("submit", handleSubmission);
  document.querySelector("form#delivery-info").addEventListener("submit", deliverySubmission)
  document.querySelector("#request-delivery").addEventListener("click", deliverySubmission);
});

