import data from "./data.js";

const itemsContainer = document.querySelector("#items");

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

  const descPElem = document.createElement("p");
  descPElem.innerText = data[i].desc;
  newDiv.appendChild(descPElem);

  const pricePElem = document.createElement("p");
  pricePElem.innerText = data[i].price;
  newDiv.appendChild(pricePElem);

  const buttonElem = document.createElement("button");
  buttonElem.id = data[i].name;
  buttonElem.dataset.price = data[i].price;
  buttonElem.innerHTML = "Add to Cart";
  newDiv.appendChild(buttonElem);

  // put new div inside items container
  itemsContainer.appendChild(newDiv);
}
