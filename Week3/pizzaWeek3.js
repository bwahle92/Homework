//1: Created an array of pizzaToppings.
let pizzaToppings = ["ham", "bacon", "extra cheese", "sausage"];
//2: Created greetCustomer function that welcomes guest and loops toppings.
function greetCustomer() {
  let greeting = `Welcome to Wild Pizza! Today's toppings include:`;
  for (let toppings of pizzaToppings) {
    greeting += `${toppings},`;
  }
  console.log(greeting);
}
greetCustomer();
//3: Created getPizzaOrder function that has crust, size, and toppings as inputs
function getPizzaOrder(size, crust, ...toppings) {
  let message = `One ${size} ${crust} pizza with `;
  for (let topping of toppings) {
    message += `${topping},`;
  }
  message += ",coming up!";
  console.log(message);
  return [size, crust, toppings];
}

//4: Created preparePizza function.
function preparePizza([size, crust, toppings]) {
  console.log("The following order is being prepared.");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}
//5: Create a servePizza function.
function servePizza(pizza) {
  let message = `Your order is ready: One ${pizza.size} ${pizza.crust} crust with `;
  for (let topping of pizza.toppings) {
    message += `${topping}`;
  }
  message += ". Enjoy!";
  console.log(message);
  return pizza;
}
servePizza(preparePizza(getPizzaOrder("large", "cheesy", "extra cheese")));
