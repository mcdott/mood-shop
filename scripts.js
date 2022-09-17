import data from "./data.js";

const itemsContainer = document.querySelector("#items");
const itemList = document.getElementById("item-list");
const cartQty = document.getElementById("cart-qty");
const cartTotal = document.getElementById("cart-total");

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
  // create a new div element and give it a class name
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  // create an image element
  const img = document.createElement("img");
  // this will change each time we go through the loop. Can you explain why?
  img.src = data[i].image;
  img.width = 300;
  img.height = 300;
  // Add the image to the div
  newDiv.appendChild(img);

  const desc = document.createElement("p");
  desc.innerText = data[i].desc;
  newDiv.appendChild(desc);

  const price = document.createElement("p");
  price.innerText = data[i].price;
  newDiv.appendChild(price);

  const button = document.createElement("button");
  button.id = data[i].name;
  button.dataset.price = data[i].price;
  button.innerHTML = "Add to Cart";
  newDiv.appendChild(button);

  // put new div inside items container
  itemsContainer.appendChild(newDiv);
}

const cart = [];
// ---------------------------------------------------------
// Add Item and Track Qty

function addItem(name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      return;
    }
  }
  const item = { name, price, qty: 1 };
  cart.push(item);
}
// ---------------------------------------------------------
// Show Items

function showItems() {
  //   const qty = getQty();
  cartQty.innerHTML = `You have ${getQty()} items in your cart`;

  let itemStr = "";
  for (let i = 0; i < cart.length; i += 1) {
    const { name, price, qty } = cart[i];
    // Note: '+=' will append to the string
    itemStr += `<li> ${name} $${price} x ${qty} = ${price * qty}</li>`;
  }
  itemList.innerHTML = itemStr;

  cartTotal.innerHTML = `Your total: $${getTotal()}`;
}
// ---------------------------------------------------------
// Get Qty
function getQty() {
  let qty = 0;
  for (let i = 0; i < cart.length; i++) {
    qty += cart[i].qty;
  }
  return qty;
}
//----------------------------------------------------------
// Get Total
function getTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].qty;
  }
  return total;
}

addItem("happy", 5.99);
addItem("calm", 5.99);
addItem("energetic", 5.99);
addItem("happy", 5.99);
addItem("happy", 5.99);
showItems();
console.log(cart);
console.log(itemList);
