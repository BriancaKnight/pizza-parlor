# B's Pizzeria

#### By Brianca Knight

#### A pizza ordering interface

## Technologies Used

* HTML
* Javascript
* CSS

## Description

This browser application allows users to create a pizza, add multiple pizzas to an order, and enter delivery information. Users are presented with a reciept that shows the grand total owed for the pizzas they created. 

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory
* Open index.html in your browser. 

## Known Bugs

None.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Brianca Knight

## TESTS

Describe Pizza ()
```
Test: It should create a Pizza object with two toppings and size. 
Code: const pizza1 = new Pizza(["pepperoni", "olive"], "medium");
Expected Output: pizza1 { toppings: ["pepperoni", "olive"], size: "medium" }
```
```
Test: It should create a prototype to calculate pizza cost. 
Code: pizza1.cost();
Expected Output: $15
```

Describe Order ()
```
Test: It should create a Order constructor that holds different pizzas.
Code: const testOrder = new Order("pizza1", "pizza2");
Expected Output: Order {"pizza1", "pizza2"}
```
```
Test: It will create a reciept prototype to calculate cost of multiple pizza orders.
Code: order.receipt();
Expected Output: $45
```