let pizzaPlace = "Dimos";
let numberOfToppings = 3;
console.log(
  pizzaPlace,
  typeof pizzaPlace,
  numberOfToppings,
  typeof numberOfToppings
);
console.log(
  `Here at ${pizzaPlace} we're running a special on a 50-inch, ${numberOfToppings}-topping pizza for just $10.99`
);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity");
} else {
  console.log("A whole lot of pizza");
}
let i = 0;
for (let toppings = 0; toppings <= 10; ++toppings) {
  console.log(toppings);
}
